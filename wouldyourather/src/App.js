import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import { 
    handleGetAllQuestions 
} from './actions/questionsI';
import {
    handleSetAuthedUser
} from './actions/authedUserI'


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetAllQuestions());
        this.props.dispatch(handleSetAuthedUser("francesyu90"));
    }

    render() {
        return (
            <div className="App">
                Hello World
            </div>
        );
  }
}

export default connect()(App);
