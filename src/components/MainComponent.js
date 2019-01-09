import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
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

import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';


// dispatch action to props
const mapDispatchToProps = dispatch => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId,rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedback: () => {dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())}
})

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
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }
    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
                    dishLoading={this.props.dishes.isLoading}
                    dishErr={this.props.dishes.errMes}
                    promotion={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]} 
                    promoLoading={this.props.promotions.isLoading}
                    promoErr={this.props.promotions.errMes}
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
                    dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]} 
                    isLoading={this.props.dishes.isLoading}
                    errMes={this.props.dishes.errMes}
                    comment={this.props.comments.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
                    commentErr={this.props.comments.errMes}
                    postComment={this.props.postComment}
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
                    <Route exact path="/contactus" component={()=> <Contact resetFeedback={this.props.resetFeedback}/>} />
                    <Redirect to="/home" />
                </Switch>
                <br/>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
