import React, {Component} from 'react';
import { Card,
        CardImg,
        CardImgOverlay,
        CardTitle } from 'reactstrap';

import  DishDetail  from '../DishdetailComponent/Dishdetail';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
        this.onDishSelect = this.onDishSelect.bind(this);
    }
    onDishSelect(dish){
        this.setState({
            selected: dish
        })
    }

    render (){
        const dishes = this.props.dishes.map( (dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-3 mt-5'>
                    <Card onClick={()=> {this.onDishSelect(dish)}}>
                        <CardImg width='100%' src={dish.image} alt={dish.name}/>
                        <CardImgOverlay className='mr-5'>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return (
            <div className='container'>
                <div className='row'>
                    {dishes}
                </div>
                <DishDetail selected={this.state.selected} />
            </div>
        )
    }
}