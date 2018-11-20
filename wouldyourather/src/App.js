import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import { handleGetAllUsers } from './actions/usersI';


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetAllUsers());
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
