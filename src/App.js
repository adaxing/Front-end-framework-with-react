import React, { Component } from 'react';
import './App.css';

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import { ConfigStore } from './redux/ConfigStore';
import { Provider } from 'react-redux';


const store = ConfigStore();

class App extends Component {
  
  render() {
    return (
      // all components within Provider have store value
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
