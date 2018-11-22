import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import {
    Grid
} from '@material-ui/core';

import { handleGetAllQuestions } from '../actions/questionsI';

import QDetails from '../components/QDetails';

class PQuestion extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        questions: PropTypes.object.isRequired,
        users: PropTypes.object.isRequired
    }

    componentDidMount() {

        const { 
            authedUser, 
            history, 
            location, 
            questions 
        } = this.props;

        if (authedUser === "") {

            const redirectUrl = (!location.state)? "/" : `/questions/${location.state.questionId}`;

            history.push({
                pathname: "/login",
                state: {
                    redirectUrl
                }
            })
        }

        if (Object.keys(questions).length === 0) {
            this.props.dispatch(handleGetAllQuestions());
        }
    }

    render() {

        const { location, questions, users } = this.props;

        if (!location.state) {
            return <Redirect to="/" />
        }

        const { questionId } = location.state;

        const question = questions[questionId];

        if (!question) {
            return <Redirect to="/notfound" />
        }

        const author = users[question.author];
        
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <QDetails question={question} author={author} />
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users, questions }) {

    return {
        authedUser: authedUser.userId,
        users: users.users,
        questions: questions.questions
    };
}

export default connect(mapStateToProps)(PQuestion);