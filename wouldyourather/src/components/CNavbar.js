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

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { appName } from '../constants/shared.ts';

import { handleSetAuthedUser } from '../actions/authedUserI';

class CNavbar extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired
    }

    handleLogOutButtonClick(event) {

        event.preventDefault();

        this.props.dispatch(handleSetAuthedUser(""));
    }

    render() {

        const { authedUser } = this.props;
        
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
                                    authedUser === "" &&
                                    <Button color="inherit">
                                        log in
                                    </Button> 
                                }
                                {
                                    authedUser !== ""  &&
                                    <span>
                                        <Typography color="inherit" variant="button">
                                            {authedUser}
                                            <Tooltip title="Log Out">
                                                <IconButton 
                                                    color="inherit" 
                                                    onClick={this.handleLogOutButtonClick.bind(this)} 
                                                >
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

function mapStateToProps({ authedUser }) {
    return {
        authedUser: authedUser.userId
    };
}

export default connect(mapStateToProps)(CNavbar);