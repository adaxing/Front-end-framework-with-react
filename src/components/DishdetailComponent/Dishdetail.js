import React from 'react';
import { Card,
    CardImg,
    CardTitle,
    CardBody,
    CardText } from 'reactstrap';

    function DisplayDish({dish}) {
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
    function RenderComments({comment}) {
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

    const DishDetail = (props) => {
        if (props.selected) {
            return (
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <DisplayDish dish={props.selected} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        <RenderComments comment={props.selected} />
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

export default DishDetail;