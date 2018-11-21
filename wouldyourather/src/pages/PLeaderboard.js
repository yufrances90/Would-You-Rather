import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class PLeaderboard extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired
    }

    state = {
        redirectUrl: "/leaderboard"
    }

    componentDidMount() {
        
        const { authedUser, history } = this.props;

        const { redirectUrl } = this.state; 

        if (authedUser === "") {
            history.push({
                pathname: "/login",
                state: {
                    redirectUrl
                }
            })
        }
    }

    render() {
        return (
            <div>
                Hello from PLeaderboard
            </div>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser: authedUser.userId
    }
}

export default connect(mapStateToProps)(PLeaderboard);