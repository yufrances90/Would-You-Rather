import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    List,
    ListItem
} from '@material-ui/core';
import ListQuestions from './ListQuestions';

class CTab extends Component {

    static propTypes = {
        questions: PropTypes.array.isRequired,
        questionType: PropTypes.number.isRequired, /* 0: unanswered, 1: answered */
        currentUserId: PropTypes.string.isRequired
    }

    render() {

        const { 
            questions, 
            questionType, 
            currentUserId 
        } = this.props;

        return (
            <div style={{paddingTop: '2em'}}>
                <ListQuestions 
                    questions={questions} 
                    questionType={questionType}
                    currentUserId={currentUserId}
                />
            </div>
        );
    }
}

export default CTab;