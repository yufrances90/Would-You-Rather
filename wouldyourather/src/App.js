import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import PLogin from './pages/PLogin';
import CNavbar from './components/CNavbar';
import PHome from './pages/PHome';
import PLeaderboard from './pages/PLeaderboard';
import PQuestion from './pages/PQuestion';
import PNotFound from './pages/PNotFound';
import PAdd from './pages/PAdd';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <CNavbar />
                    <div className="app-body">
                        <Route exact path="/" component={PHome} />
                        <Route exact path="/login" component={PLogin} />
                        <Route exact path="/leaderboard" component={PLeaderboard} />
                        <Route exact path="/notfound"  component={PNotFound} />
                        <Route exact path="/add" component={PAdd} />
                        <Route exact path="/questions/:question_id" component={PQuestion} />
                    </div>
                </div>
            </Router>
        );
  }
}

export default App;
