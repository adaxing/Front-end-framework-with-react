import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

import { DISHES } from './components/SharedComponent/Dish';
import Menu from './components/MenuComponent/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish : DISHES
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <div className='container'>
            <NavbarBrand href='/'>Confusion Rest</NavbarBrand>   
          </div>
        </Navbar>
        <Menu dishes={this.state.dish}/>
      </div>
    );
  }
}

export default App;
