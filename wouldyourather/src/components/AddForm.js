import React, { Component } from 'react';

import {
    TextField,
    Typography,
    Divider,
    Button
} from '@material-ui/core';

import { Options } from '../constants/questions';

class AddForm extends Component {

    state = {
        [Options.OPTION_ONE]: '',
        [Options.OPTION_TWO]: ''
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick(event) {

        event.preventDefault();

        const { optionOne, optionTwo } = this.state;

        console.log(optionOne);
    }

    render() {

        const { optionOne, optionTwo } = this.state;

        return (
            <form>
                <Typography variant="title">
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
                    style={{float: "right"}} 
                    onClick={this.handleClick.bind(this)}
                    disabled={optionOne === '' || optionTwo === ''}
                >
                    submit
                </Button>
            </form>
        );
    }
}

export default AddForm;