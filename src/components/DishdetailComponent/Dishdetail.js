import React from 'react';
import { Card,
    CardImg,
    CardTitle,
    CardBody,
    CardText,
    Breadcrumb,
    BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from '../CommentComponent/Comment';
import { Loading } from '../LoadingComponent/Loading';
import { baseUrl } from '../SharedComponent/baseUrl';

    function DisplayDish({dish}) {
        if (dish) {
            return (
                <Card>
                    <CardImg src={baseUrl + dish.image}/>
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
                comment.map( (c)=> {
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
        if (props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        } 
        else if (props.errMes) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMes}</h4>
                    </div>
                </div>
            )
        }
        else if (props.dish) {
            console.log('In the dishDetail page, ', props)
            return (
                <div className='container'>
                    <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <DisplayDish dish={props.dish} />
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <h4>Comments</h4>
                            <RenderComments comment={props.comment} />
                            <CommentForm dishId={props.dish.id} postComment={props.postComment}/>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

export default DishDetail;