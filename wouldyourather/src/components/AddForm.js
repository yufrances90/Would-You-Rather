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

    render() {

        console.log(this.state);

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
                />
                <br /><br /><br />
                <TextField
                    label="Option Two"
                    multiline
                    rows={5}
                    name={Options.OPTION_TWO}
                    style={{width: "100%"}}
                    variant="outlined"
                />
                <br /><br /><br />
                <Button 
                    variant="outlined" 
                    style={{float: "right"}} 
                >
                    submit
                </Button>
            </form>
        );
    }
}

export default AddForm;