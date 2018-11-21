import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { handleGetInitialData } from '../actions/shared';

class PHome extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        currentUser: PropTypes.object.isRequired,
        questions: PropTypes.object.isRequired
    }

    state = {
        redirectUrl: "/"
    }

    componentDidMount() {
        
        const { 
            authedUser, 
            history, 
            currentUser, 
            questions 
        } = this.props;

        const { redirectUrl } = this.state; 

        if (authedUser === "") {
            history.push({
                pathname: "/login",
                state: {
                    redirectUrl
                }
            })
        }

        if (
            !currentUser || 
            Object.keys(questions).length === 0
        ) {

            this.props.dispatch(handleGetInitialData());
        }
    }

    render() {

        const { currentUser, questions } = this.props;

        console.log(currentUser);
        console.log(questions);
        
        return (
            <div>
                Hello from PHome
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users, questions }) {

    const authedUserId = authedUser.userId;
    const userMap = users.users;
    const questonMap = questions.questions;

    const currentUser = userMap[authedUserId];

    return {
        authedUser: authedUserId,
        currentUser,
        questions: questonMap
    }
}

export default connect(mapStateToProps)(PHome);