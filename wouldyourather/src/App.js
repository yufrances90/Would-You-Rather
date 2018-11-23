import React, { Component, Fragment } from 'react';

import { 
    BrowserRouter as Router, 
    Route, 
    Switch 
} from 'react-router-dom';

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
                        <Switch>
                            <Route exact path="/" component={PHome} />
                            <Route path="/login" component={PLogin} />
                            <Route path="/leaderboard" component={PLeaderboard} />
                            <Route path="/add" component={PAdd} />
                            <Route path="/questions/:question_id" component={PQuestion} />
                            <Route component={PNotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
  }
}

export default App;
