import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    List,
    ListItem
} from '@material-ui/core';
import ListQuestions from './ListQuestions';

class CTab extends Component {

    static propTypes = {
        questions: PropTypes.array.isRequired
    }

    render() {

        const { questions } = this.props;

        return (
            <div style={{paddingTop: '2em'}}>
                <ListQuestions questions={questions} />
            </div>
        );
    }
}

export default CTab;