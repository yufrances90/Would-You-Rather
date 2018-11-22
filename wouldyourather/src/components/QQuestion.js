import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    Typography,
    List,
    MenuItem,
    ListItemText,
    Button
} from '@material-ui/core';

class QQuestion extends Component {

    static propTypes = {
        question: PropTypes.object.isRequired
    }

    state = {
        selectedIndex: -1 /** 0: option 1, 1: option 2 */
    }

    handleChange(event, value) {

        event.preventDefault();

        this.setState({
            selectedIndex: value
        })
    }

    render() {

        const { question } = this.props;

        const { selectedIndex } = this.state;

        return (
            <div style={{paddingTop: "2em" }}>
                <Typography variant="h4">
                    Would you rather?
                </Typography>
                <List className="app-flex-container">
                    <MenuItem
                        selected={selectedIndex === 0}
                        onClick={event => this.handleChange(event, 0)}
                    >
                        <ListItemText>
                            a. {question.optionOne.text}
                        </ListItemText>
                    </MenuItem>
                    <MenuItem
                        selected={selectedIndex === 1}
                        onClick={event => this.handleChange(event, 1)}
                    >
                        <ListItemText>
                            b. {question.optionTwo.text}
                        </ListItemText>
                    </MenuItem>
                </List>
                <Button variant="outlined" style={{margin: "2em 10em"}}>
                    Confirm
                </Button>
            </div>
        );
    }
}

export default QQuestion;