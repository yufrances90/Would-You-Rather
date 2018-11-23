import React, { Component } from 'react';

import {
    TextField,
    Typography,
    Divider,
    Button
} from '@material-ui/core';

import PropTypes from 'prop-types';

import { Options } from '../constants/questions';

class AddForm extends Component {

    static propTypes = {
        handleAddNewQuestion: PropTypes.func.isRequired,
        author: PropTypes.string.isRequired
    }

    state = {
        [Options.OPTION_ONE]: '',
        [Options.OPTION_TWO]: ''
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClickButtonClick(event) {
        this.setState({
            [Options.OPTION_ONE]: '',
            [Options.OPTION_TWO]: ''
        })
    }

    handleClick(event) {

        event.preventDefault();

        const { optionOne, optionTwo } = this.state;

        const { author, handleAddNewQuestion } = this.props;

        const question = {
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author
        }

        handleAddNewQuestion(question);
    }

    render() {

        const { optionOne, optionTwo } = this.state;

        return (
            <form>
                <Typography variant="title" style={{textAlign: "right"}}>
                    Add New Poll
                </Typography>
                <Divider />
                <br /><br /><br />
                <Typography variant="h3">
                    Would you rather?
                </Typography>
                <br /><br /><br />
                <TextField
                    label="Option One"
                    multiline
                    rows={5}
                    name={Options.OPTION_ONE}
                    style={{width: "100%"}}
                    variant="outlined"
                    value={optionOne}
                    onChange={this.handleChange.bind(this)}
                />
                <br /><br /><br />
                <TextField
                    label="Option Two"
                    multiline
                    rows={5}
                    name={Options.OPTION_TWO}
                    style={{width: "100%"}}
                    variant="outlined"
                    value={optionTwo}
                    onChange={this.handleChange.bind(this)}
                />
                <br /><br /><br />
                <Button 
                    variant="outlined" 
                    onClick={this.handleClickButtonClick.bind(this)}
                    disabled={
                        (optionOne === '' && optionTwo === '')
                    }
                    color="secondary"
                >
                    clear
                </Button>
                <Button 
                    variant="outlined" 
                    style={{ 
                        marginLeft: "0.5em"
                    }} 
                    onClick={this.handleClick.bind(this)}
                    disabled={optionOne === '' || optionTwo === ''}
                    color="primary"
                >
                    submit
                </Button>
            </form>
        );
    }
}

export default AddForm;