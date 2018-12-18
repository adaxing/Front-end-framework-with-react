import React from 'react';
import { Card,
        CardImg,
        CardImgOverlay,
        CardTitle } from 'reactstrap';

    function DishesItem({dish, onClick}) {
        return (
            <Card onClick={()=> onClick(dish.id)}>
                <CardImg width='100%' src={dish.image} alt={dish.name}/>
                <CardImgOverlay className='mr-5'>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        )
    }       

    const Menu = (props) => {
        const dishes = props.dishes.map( (dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-3 mt-5'>
                    <DishesItem dish={dish} onClick={props.onClick} />
                </div>
            )
        })
        return (
            <div className='container'>
                <div className='row'>
                    {dishes}
                </div>
            </div>
        )
    }

export default Menu;