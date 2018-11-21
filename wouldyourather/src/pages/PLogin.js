import React, { Component } from 'react';

import { connect } from 'react-redux';

import { handleGetAllUsers } from '../actions/usersI';

class PLogin extends Component {

    componentDidMount() {

        const { users } = this.props;

        if(!users) {
            this.props.dispatch(handleGetAllUsers());
        }
        
    }

    render() {

        const { users } = this.props;

        console.log(users);

        return (
            <div>
                Hello from PLogin
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users
    };
}

export default connect()(PLogin);