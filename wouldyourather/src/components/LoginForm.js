import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
    TextField,
    MenuItem,
    Button,
    Typography
} from '@material-ui/core';

class LoginForm extends Component {

    static propTypes = {
        users: PropTypes.object.isRequired,
        handleLoginFormSubmit: PropTypes.func.isRequired
    }

    state = {
        userID: ''
    }

    handleChange(event) {

        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        const { users, handleLoginFormSubmit } = this.props;

        const { userID } = this.state;

        return (
            <div style={{marginTop: '2em', textAlign: 'center'}}>
                <form>
                    <Typography variant="h4">
                        Log In
                    </Typography>
                    <TextField
                        id="authed-user-id"
                        select
                        label="UserID"
                        value={userID}
                        name="userID"
                        onChange={this.handleChange.bind(this)}
                        helperText="Please select your userID"
                        variant="outlined"
                        style={{width: 200, margin: '5em 0'}}
                    >
                        {Object.keys(users).map(userId => (
                            <MenuItem key={userId} value={userId}>
                                {users[userId].name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button 
                        variant="outlined"
                        onClick={event => handleLoginFormSubmit(event, userID)}
                        disabled={userID === ''} 
                    >
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default LoginForm;