import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/navigation/Header/Header';
import JobsList from './components/JobsList/JobsList';
import AddVaga from './components/AddVaga/AddVaga';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="container mt-3">
          <AddVaga />
        </div>
        <div className="container ">
          <JobsList />
        </div>
      </div>
    )
  }
}

export default App
