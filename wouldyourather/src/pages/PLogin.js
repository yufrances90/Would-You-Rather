import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    LinearProgress
} from '@material-ui/core';

import PropTypes from 'prop-types';

import {
    Grid
} from '@material-ui/core';

import { handleGetAllUsers } from '../actions/usersI';
import { handleSetAuthedUser } from '../actions/authedUserI';

import LoginForm from '../components/LoginForm';

class PLogin extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        users: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.dispatch(handleGetAllUsers());
    }

    handleLoginFormSubmit(event, userId) {
        
        event.preventDefault();

        const { location, history, dispatch } = this.props;
        const { state } = location;

        dispatch(handleSetAuthedUser(userId));

        if(!state) {
            history.push("/");
        } else {
            history.push(state.redirectUrl);
        }
    }

    render() {

        const { users } = this.props;

        if (!users) {
            return <LinearProgress />;
        }

        return (
            <div>
                <Grid container>
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={2}>
                        <LoginForm 
                            users={users}
                            handleLoginFormSubmit={this.handleLoginFormSubmit.bind(this)} 
                        />
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: users.users
    };
}

export default connect(mapStateToProps)(PLogin);