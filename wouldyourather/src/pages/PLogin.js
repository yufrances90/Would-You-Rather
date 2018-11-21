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

import LoginForm from '../components/LoginForm';

class PLogin extends Component {

    static propTypes ={
        dispatch: PropTypes.func.isRequired,
        users: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.dispatch(handleGetAllUsers());
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
                        <LoginForm users={users} />
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