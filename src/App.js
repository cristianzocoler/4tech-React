import React, { Component } from 'react';
import './App.css';

import Header from './components/navigation/Header/Header';
import JobsList from './components/JobsList/JobsList';
import JobForm from './components/JobForm/JobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="container mt-3">
          <JobForm/>
        </div>
        <div className="container mt-3">
          <JobsList />
        </div>
      </div>
    )
  }
}

export default App
