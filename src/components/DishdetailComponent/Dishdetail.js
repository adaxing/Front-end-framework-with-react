import React, { Component } from 'react';
import { Card,
    CardImg,
    CardTitle,
    CardBody,
    CardText } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        
        this.displayDish = this.displayDish.bind(this);
        this.renderComments = this.renderComments.bind(this);
        console.log('Dish component constructor is invoked')
    }
    componentDidMount(){
        console.log('Dish component ComponentDidMount is invoked')
    }
    componentWillMount(){
        console.log('Dish component ComponenWillMount is invoked')
    }
    componentWillUpdate(){
        console.log('Dish component ComponenWillUpdate is invoked')

    }
    displayDish(dish) {
        if (dish) {
            return (
                <Card>
                    <CardImg src={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } 
    }
    renderComments(comment) {
        if (comment) {
            return (
                comment.comments.map( (c)=> {
                    return (
                        <div key={c.author}>
                            <p>{c.comment}</p>
                            <p> --{c.author}, {new Intl.DateTimeFormat('en-US',{
                                                                                year: 'numeric',
                                                                                month: 'short',
                                                                                day: '2-digit'
                                                                                }).format( new Date(Date.parse(c.date)))}
                            </p>
                        </div>
                    )
                })
            )
        } 
    }

    render () {
        console.log('Dish component render is invoked')
        if (this.props.selected) {
            return (
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.displayDish(this.props.selected)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        {this.renderComments(this.props.selected)}
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default DishDetail;