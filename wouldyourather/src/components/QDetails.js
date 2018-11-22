import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Grid
} from '@material-ui/core';

import QProfile from './QProfile';
import QQuestion from './QQuestion';

class QDetails extends Component {

    static propTypes = {
        question: PropTypes.object.isRequired,
        author: PropTypes.object.isRequired,
        questionType: PropTypes.number.isRequired, /* 0: unanswered, 1: answered */
        currentUser: PropTypes.object.isRequired
    }

    render() {

        const { 
            question, 
            author, 
            questionType,
            currentUser 
        } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        <QProfile author={author} />
                    </Grid>
                    <Grid item xs={9}>
                        <QQuestion question={question} currentUser={currentUser} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default QDetails;