import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import {
    Grid,
    Button
} from '@material-ui/core';

import { 
    handleGetAllQuestions,
    handleSaveQuestionAnswer 
} from '../actions/questionsI';

import QDetails from '../components/QDetails';

class PQuestion extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        questions: PropTypes.object.isRequired,
        users: PropTypes.object.isRequired
    }

    state = {
        isVoted: false
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

    handleSetVoted() {
        this.setState({
            isVoted: true
        });
    }

    handleConfirmBtnClick(authedUser, qid, answer) {

        this.props.dispatch(handleSaveQuestionAnswer(
            authedUser,
            qid,
            answer
        ));

        this.handleSetVoted();
    }

    render() {

        const { location, questions, users } = this.props;

        if (!location.state) {
            return <Redirect to="/" />
        }

        const { 
            questionId, 
            questionType, 
            currentUserId 
        } = location.state; /* 0: unanswered, 1: answered */

        const question = questions[questionId];

        if (!question) {
            return <Redirect to="/notfound" />
        }

        const author = users[question.author];

        const currentUser = users[currentUserId];

        const { isVoted } = this.state;
        
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <QDetails 
                            question={question} 
                            author={author} 
                            questionType={questionType}
                            currentUser={currentUser} 
                            handleConfirmBtnClick={this.handleConfirmBtnClick.bind(this)}
                            isVoted={isVoted}
                        />
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