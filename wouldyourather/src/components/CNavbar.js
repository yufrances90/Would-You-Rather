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
    AccountCircle,
    Dashboard,
    LibraryAdd
} from '@material-ui/icons';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { appName } from '../constants/shared.ts';

import { handleSetAuthedUser } from '../actions/authedUserI';

class CNavbar extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    handleLogOutButtonClick(event) {

        event.preventDefault();

        this.props.dispatch(handleSetAuthedUser(""));
        
        location.href="/login";
    }

    render() {

        const { authedUser } = this.props;
        
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className="app-navbar">
                        <Grid container justify="space-between">
                            <Grid item>
                                <Link to="/" className="app-link">
                                    <Typography color="inherit" variant="title">
                                        {appName}
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                {
                                    authedUser === "" &&
                                    <Link to="/login" className="app-link">
                                        <Button color="inherit">
                                            log in
                                        </Button> 
                                    </Link>
                                }
                                {
                                    authedUser !== ""  &&
                                    <span>
                                        <Typography color="inherit" variant="button">
                                            {authedUser}
                                            <Tooltip title="Go to Leaderboard">
                                                <IconButton color="inherit">
                                                    <Link to="/leaderboard" style={{color: "white"}} >
                                                        <Dashboard />
                                                    </Link>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Add new poll">
                                                <IconButton color="inherit">
                                                    <Link to="/add" style={{color: "white"}}>
                                                        <LibraryAdd />
                                                    </Link>
                                                </IconButton>
                                            </Tooltip>
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