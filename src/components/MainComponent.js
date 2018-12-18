import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import { DISHES } from './SharedComponent/Dish';
import Menu from './MenuComponent/Menu';
import  DishDetail  from './DishdetailComponent/Dishdetail';

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
                <Navbar color="light" light expand="md">
                    <div className='container'>
                        <NavbarBrand href='/'>Confusion Rest</NavbarBrand>   
                    </div>
                </Navbar>
                <Menu dishes={this.state.dish} onClick={(dishId)=> this.onDishSelect(dishId)} />
                <DishDetail selected={this.state.dish.filter( (dish)=> dish.id === this.state.selected)[0]} />
            </div>
        );
    }
}

export default Main;
