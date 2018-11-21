import React, { Component } from 'react';

import './App.css';
import PLogin from './pages/PLogin';
import CNavbar from './components/CNavbar';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CNavbar />
                <div className="app-body">
                    <PLogin />
                </div>
            </div>
        );
  }
}

export default App;
