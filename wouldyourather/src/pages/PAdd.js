import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import {
    Grid
} from '@material-ui/core';

import AddForm from '../components/AddForm';

class PAdd extends Component {

    static propTypes = {
        authedUser: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired
    }

    state = {
        redirectUrl: "/add"
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
        return (
            <div>
                <Grid container> 
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <AddForm />
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