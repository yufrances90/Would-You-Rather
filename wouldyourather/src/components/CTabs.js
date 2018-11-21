import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CTabs extends Component {

    static propTypes = {
        currentUser: PropTypes.object.isRequired,
        questions: PropTypes.object.isRequired
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

    render() {

        const { answeredQs, unansweredQs } = this.getAnsweredAndUnansweredQuestions();

        return (
            <div>
                Hello from CTabs
            </div>
        );
    }
}

export default CTabs;