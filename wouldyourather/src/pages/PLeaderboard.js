import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { handleGetAllUsers } from '../actions/usersI';

class PLeaderboard extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        users: PropTypes.array.isRequired
    }

    state = {
        redirectUrl: "/leaderboard"
    }

    componentDidMount() {
        
        const { authedUser, history, users } = this.props;

        const { redirectUrl } = this.state; 

        if (authedUser === "") {
            history.push({
                pathname: "/login",
                state: {
                    redirectUrl
                }
            })
        }

        if(users.length === 0) {
            this.props.dispatch(handleGetAllUsers());
        }
    }

    render() {

        const { users } = this.props;

        return (
            <div>
                Hello from PLeaderboard
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users }) {

    const authedUserId = authedUser.userId;
    const userMap = users.users

    return {
        authedUser: authedUserId,
        users: Object.keys(userMap).map(userId => {

            const user = userMap[userId];

            return {
                [userId]: {
                    userId,
                    name: user.name,
                    numQAsked: user.questions.length,
                    numQAnsed: Object.keys(user.answers).length 
                }
            }
        })
    }
}

export default connect(mapStateToProps)(PLeaderboard);