import React, {Component} from 'react';
import { Card,
        CardImg,
        CardImgOverlay,
        CardTitle } from 'reactstrap';

export default class Menu extends Component {
    constructor(props){
        super(props);
        console.log('Menu component constructor is invoked')

    }

    componentDidMount(){
        console.log('Menu component ComponentDidMount is invoked')
    }
    componentWillMount(){
        console.log('Menu ComponenWillMount is invoked')
    }

    render (){
        console.log('Menu component render is invoked')

        const dishes = this.props.dishes.map( (dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-3 mt-5'>
                    <Card onClick={()=> this.props.onClick(dish.id)}>
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
            </div>
        )
    }
}