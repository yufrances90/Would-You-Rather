import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class PQuestion extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }

    componentDidMount() {

        const { authedUser, history, location } = this.props;

        if (authedUser === "") {

            const redirectUrl = (!location.state)? "/" : `/questions/${location.state.questionId}`;

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
                Hello from PQuestion
            </div>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser: authedUser.userId
    };
}

export default connect(mapStateToProps)(PQuestion);