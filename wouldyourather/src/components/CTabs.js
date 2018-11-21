import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Tabs,
    Tab
} from '@material-ui/core';
import CTab from './CTab';

class CTabs extends Component {

    static propTypes = {
        currentUser: PropTypes.object.isRequired,
        questions: PropTypes.object.isRequired
    }

    state = {
        questionType: 0 /* 0: unanswered, 1: answered */
    }

    handleChange(event, value) {
        this.setState({
            questionType: value
        })
    }

    getAnsweredAndUnansweredQuestions() {

        const { currentUser, questions } = this.props;

        const answeredQIds = Object.keys(currentUser.answers);
        const answeredQs = answeredQIds.map(qid => questions[qid]);

        const unansweredQIds = Object.keys(questions).filter(qid => !answeredQIds.includes(qid));
        const unansweredQs = unansweredQIds.map(qid => questions[qid]);

        return {
            answeredQs,
            unansweredQs
        };
    }

    getQuestions(answeredQs, unansweredQs) {

        const { questionType } = this.state;

        return (questionType === 0)? unansweredQs : answeredQs;
    }

    render() {

        const { answeredQs, unansweredQs } = this.getAnsweredAndUnansweredQuestions();

        const { questionType } = this.state;

        const filteredQs = this.getQuestions(answeredQs, unansweredQs);

        return (
            <div>
                <Tabs value={questionType} onChange={this.handleChange.bind(this)}>
                    <Tab label="Unanswered Questions" />
                    <Tab label="Answered Questions" />
                </Tabs>
                <CTab questions={filteredQs} />
            </div>
        );
    }
}

export default CTabs;