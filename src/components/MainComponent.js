import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import { DISHES } from './SharedComponent/Dish';
// import { COMMENTS } from './SharedComponent/Comments';
// import { LEADERS } from './SharedComponent/Leaders';
// import { PROMOTIONS } from './SharedComponent/Promotions';

import Header from './SharedComponent/Header';
import Footer from './SharedComponent/Footer';

import Home from './HomeComponent/Home';
import About from './AboutComponent/About';
import Menu from './MenuComponent/Menu';
import DishDetail  from './DishdetailComponent/Dishdetail';
import Contact from './ContactComponent/Contact';



// retrieve state value from appjs by passing props 
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }    
}


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo)=>promo.featured)[0]} 
                    leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
                />
            )
        }
        const AboutPage = () => {
            return (
                <About 
                    leaders={this.props.leaders} />
            )
        }
        const DishWithId = ({match}) => {
            return (
                <DishDetail
                    dish={this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]} 
                    comment={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
                />
            )
        }

        return (
            <div>
                <Header />
                <br/>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/aboutus" component={AboutPage} />
                    <Route exact path="/menu" component={ ()=><Menu dishes={this.props.dishes} /> } />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <br/>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
