import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    LinearProgress
} from '@material-ui/core';

import { handleGetAllUsers } from '../actions/usersI';

import LoginForm from '../components/LoginForm';

class PLogin extends Component {

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
                <LoginForm />
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