import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import PLogin from './pages/PLogin';
import CNavbar from './components/CNavbar';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <CNavbar />
                    <div className="app-body">
                        <Route exact path="/login" component={PLogin} />
                    </div>
                </div>
            </Router>
        );
  }
}

export default App;
