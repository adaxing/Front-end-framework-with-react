import React, { Component } from 'react';

import { DISHES } from './SharedComponent/Dish';
import Header from './SharedComponent/Header';
import Home from './SharedComponent/Home';
import Footer from './SharedComponent/Footer';


import Menu from './MenuComponent/Menu';
//import  DishDetail  from './DishdetailComponent/Dishdetail';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish : DISHES,
            selected: null
        }
        this.onDishSelect = this.onDishSelect.bind(this);
    }
    onDishSelect(dishId){
        this.setState({
            selected: dishId
        })
    }
    
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/menu" component={ ()=><Menu dishes={this.state.dish} /> } />
                   
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
