import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import {
    Grid,
    Button
} from '@material-ui/core';

import { handleSaveQuestion } from '../actions/questionsI';

import AddForm from '../components/AddForm';

class PAdd extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired
    }

    state = {
        redirectUrl: "/add"
    }

    handleAddNewQuestion(question) {

        this.props.dispatch(handleSaveQuestion(question));

        this.props.history.push("/");
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
            });
        }
    }

    render() {

        const { authedUser } = this.props;

        return (
            <div>
                <Grid container> 
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <AddForm 
                            handleAddNewQuestion={this.handleAddNewQuestion.bind(this)}
                            author={authedUser}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser: authedUser.userId
    }
}

export default connect(mapStateToProps)(PAdd);