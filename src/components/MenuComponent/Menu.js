import React from 'react';
import { Card,
        CardImg,
        CardImgOverlay,
        CardTitle,
        Breadcrumb,
        BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import { Loading } from '../LoadingComponent/Loading';

    function DishesItem({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width='100%' src={dish.image} alt={dish.name}/>
                    <CardImgOverlay className='mr-5'>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        )
    }       

    const Menu = (props) => {
        const dishes = props.dishes.dishes.map( (dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-3 mt-5'>
                    <DishesItem dish={dish} onClick={props.onClick} />
                </div>
            )
        })
        if (props.dishes.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        } 
        else if (props.dishes.errMes) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{props.dishes.errMes}</h4>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container'>
                    <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        {dishes}
                    </div>
                    <br />
                    <hr/>
                </div>
            )
        }
    }

export default Menu;