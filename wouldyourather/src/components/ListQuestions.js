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

import { Link } from 'react-router-dom';

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
                                <Link to={{
                                    pathname: `/questions/${question.id}`,
                                    state: {
                                        questionId: question.id
                                    }
                                }}>
                                    <LinkIcon />
                                </Link>
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default ListQuestions;