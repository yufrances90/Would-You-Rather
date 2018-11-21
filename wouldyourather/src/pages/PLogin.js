import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    LinearProgress
} from '@material-ui/core';

import PropTypes from 'prop-types';

import { handleGetAllUsers } from '../actions/usersI';

import LoginForm from '../components/LoginForm';

class PLogin extends Component {

    static propTypes ={
        dispatch: PropTypes.func.isRequired,
        users: PropTypes.object.isRequired
    }

    componentDidMount() {
        
        const { users } = this.props;

        if(!users) {
            this.props.dispatch(handleGetAllUsers());
        }
    }

    render() {

        const { users } = this.props;

        if (!users) {
            return <LinearProgress />;
        }

        return (
            <div>
                <LoginForm users={users} />
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users
    };
}

export default connect(mapStateToProps)(PLogin);