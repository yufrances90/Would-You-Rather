import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Button,
    IconButton,
    Tooltip
} from '@material-ui/core';
import {
    AccountCircle
} from '@material-ui/icons';

import { appName } from '../constants/shared.ts';

class CNavbar extends Component {

    state = {
        isLoggedIn: false,
        currentUser: "Frances"
    }

    handleToggleLogInButton() {
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {

        const { isLoggedIn } = this.state;
        
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="app-navbar">
                        <Grid container justify="space-between">
                            <Grid item>
                                <Typography color="inherit" variant="title">
                                    {appName}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {
                                    !isLoggedIn &&
                                    <Button color="inherit" onClick={this.handleToggleLogInButton.bind(this)}>
                                        log in
                                    </Button> 
                                }
                                {
                                    isLoggedIn &&
                                    <span>
                                        <Typography color="inherit" variant="button">
                                            {this.state.currentUser}
                                            <Tooltip title="Log Out">
                                                <IconButton color="inherit" onClick={this.handleToggleLogInButton.bind(this)}>
                                                    <AccountCircle />
                                                </IconButton> 
                                            </Tooltip>
                                        </Typography>
                                    </span>
                                }
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CNavbar;