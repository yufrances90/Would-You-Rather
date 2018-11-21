import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    List,
    ListItem,
    IconButton
} from '@material-ui/core';
import {
    Link as LinkIcon
} from '@material-ui/icons';

class ListQuestions extends Component {

    static propTypes = {
        questions: PropTypes.array.isRequired
    }
    
    render() {

        const { questions}  = this.props;

        return (
            <div>
                <List>
                    {questions.map(question => (
                        <ListItem key={question.id}>
                            <p>
                                {question.optionOne.text} | {question.optionTwo.text}
                            </p>
                            <IconButton>
                                <LinkIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default ListQuestions;