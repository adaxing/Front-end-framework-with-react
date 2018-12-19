import React, { Component } from 'react';

import { DISHES } from './SharedComponent/Dish';
import { COMMENTS } from './SharedComponent/Comments';
import { LEADERS } from './SharedComponent/Leaders';
import { PROMOTIONS } from './SharedComponent/Promotions';

import Header from './SharedComponent/Header';
import Home from './SharedComponent/Home';
import Footer from './SharedComponent/Footer';

import Contact from './ContactComponent/Contact';
import Menu from './MenuComponent/Menu';
//import  DishDetail  from './DishdetailComponent/Dishdetail';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes : DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo)=>promo.featured)[0]} 
                    leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
                />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={ ()=><Menu dishes={this.state.dishes} /> } />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
