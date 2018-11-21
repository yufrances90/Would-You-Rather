import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import { handleGetAllUsers } from '../actions/usersI';

import LTable from '..//components/LTable';

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
                <Grid container>
                    <Grid item xs={2}> 
                    </Grid>
                    <Grid item xs={8}>
                        <LTable users={users} />
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
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
                id: userId,
                url: user.avatarURL,
                name: user.name,
                numQAsked: user.questions.length,
                numQAnsed: Object.keys(user.answers).length 
            }
        }).sort((a, b) => {
            return (b.numQAnsed + b.numQAsked) - (a.numQAnsed + a.numQAsked);
        })
    }
}

export default connect(mapStateToProps)(PLeaderboard);