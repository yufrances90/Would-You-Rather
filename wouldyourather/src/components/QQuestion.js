import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Typography,
    List,
    MenuItem,
    ListItemText,
    Button
} from '@material-ui/core';

import { Options } from '../constants/questions';

class QQuestion extends Component {

    static propTypes = {
        question: PropTypes.object.isRequired,
        currentUser: PropTypes.object.isRequired
    }

    state = {
        selectedIndex: 0 /** 1: option 1, 2: option 2 */
    }

    handleChange(event, value) {

        event.preventDefault();

        this.setState({
            selectedIndex: value
        })
    }

    render() {

        const { question, currentUser } = this.props;

        const { selectedIndex } = this.state;

        const answer = currentUser.answers[question.id];

        return (
            <div style={{paddingTop: "2em" }}>
                <Typography variant="h4">
                    Would you rather?
                </Typography>
                <List className="app-flex-container">
                    <MenuItem
                        selected={selectedIndex === 1 || answer === Options.OPTION_ONE}
                        onClick={event => this.handleChange(event, 1)}
                        disabled={answer}
                    >
                        <ListItemText>
                            a. {question[Options.OPTION_ONE].text}
                        </ListItemText>
                    </MenuItem>
                    <MenuItem
                        selected={selectedIndex === 2 || answer === Options.OPTION_TWO}
                        onClick={event => this.handleChange(event, 2)}
                        disabled={answer}
                    >
                        <ListItemText>
                            b. {question[Options.OPTION_TWO].text}
                        </ListItemText>
                    </MenuItem>
                </List>
                <Button 
                    variant="outlined" 
                    style={{margin: "2em 10em"}}
                    disabled={selectedIndex === 0 || answer} 
                >
                    Confirm
                </Button>
            </div>
        );
    }
}

export default QQuestion;