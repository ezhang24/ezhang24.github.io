import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <About/>
        <Work/>
        <Projects/>
      </div>
    )
  }
}

export default App;
