import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import {
    Grid,
    LinearProgress
} from '@material-ui/core';

import { handleGetInitialData } from '../actions/shared';

import CTabs from '../components/CTabs';
import Profile from '../components/Profile';

class PHome extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        currentUser: PropTypes.object,
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

        if (!currentUser || Object.keys(questions).length === 0) {
            return <LinearProgress />
        }

        return (
            <div>
                <Grid container>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid 
                        item 
                        xs={2}
                        style={{
                            borderRight: "1px solid lightgray",

                        }} 
                    >  
                        <Profile currentUser={currentUser} />
                    </Grid>
                    <Grid 
                        item 
                        xs={8}
                        style={{
                            paddingLeft: "2em"
                        }}
                    >
                       <CTabs 
                            currentUser={currentUser} 
                            questions={questions} 
                        />  
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
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