import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from '../LoadingComponent/Loading';
import { baseUrl } from '../SharedComponent/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMes}){
    if (isLoading) {
        return (
            <Loading />
        )
    } else if (errMes) {
        return (
            <h4>{errMes}</h4>
        )
    } else {
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}
                >
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name}/>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        )
    }
}


function Home(props) {
    return (
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.dish} isLoading={props.dishLoading} errMes={props.dishErr}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMes={props.promoErr}/>
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leader} isLoading={props.leaderLoading} errMes={props.leaderErr}/>
                </div>
            </div>
        </div>
    )
}

export default Home;