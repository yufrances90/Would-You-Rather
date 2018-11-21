import React, { Component } from 'react';

import './App.css';
import PLogin from './pages/PLogin';
import CNavbar from './components/CNavbar';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CNavbar />
                <PLogin />
            </div>
        );
  }
}

export default App;
