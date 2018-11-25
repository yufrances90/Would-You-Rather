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
        isVoted: false,
        redirectUrl: this.props.match.params.question_id
    }

    componentDidMount() {

        const { questions, dispatch } = this.props;

        if (Object.keys(questions).length === 0) {
            dispatch(handleGetAllQuestions());
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

        const { 
            location, 
            questions, 
            users,
            authedUser,
            match 
        } = this.props;

        const { 
            isVoted,
            redirectUrl
         } = this.state;

        if (authedUser === "") {

            return (
                <Redirect to={{
                    pathname: "/login",
                    state: {
                        redirectUrl
                    }
                }} />
            );
        }

        const {  
            questionType, 
            currentUserId 
        } = location.state; /* 0: unanswered, 1: answered */

        const question = questions[match.params.question_id];

        if (!question) {
            return <Redirect to="/notfound" />
        }

        const author = users[question.author];

        const currentUser = users[currentUserId];
        
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