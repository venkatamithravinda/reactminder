import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Reminder from './containers/Reminder/Reminder';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Reminder/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
