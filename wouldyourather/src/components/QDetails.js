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
        author: PropTypes.object.isRequired
    }

    render() {

        const { question, author } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        <QProfile author={author} />
                    </Grid>
                    <Grid item xs={9}>
                        <QQuestion question={question} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default QDetails;