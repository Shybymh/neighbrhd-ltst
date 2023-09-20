import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardImgOverlay, CardBody } from 'reactstrap';



function RenderCategories({item}) {
    return(
        <Card>
                <CardImg width="40%" src={item.image} alt={item.name} />
                <CardImgOverlay>
                    <CardText><h4>{item.name}</h4></CardText>
                </CardImgOverlay>
        </Card>
    )
}


 function RenderEvents({eent}) {
    
     return(
        <div>
            <Card outline color="dark">
                <img
                    alt="Event"
                    src={ eent.image}
                    width="100%"
                />
                <CardBody className="bg-dark text-white">
                    <CardText tag="h5">{eent.description} </CardText>
                    <CardText className="text-white"><Link to='/events'>View more events</Link></CardText>
                </CardBody>
            </Card>
        </div>
     )
 }



function Home(props) {
   

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <h2 className="mt-5" >Upcoming Events</h2>
                    <hr />
                        <RenderEvents eent={props.eVent}
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-9 text-center '>
                    
                        <h2 className="mt-5">From Our Local Artists</h2>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 col-md-3 mt-1">
                        <Link to="/paintings">
                        <RenderCategories item={props.painting} />
                        </Link>
                    </div>
                    <div className="col-4 col-md-3 mt-1">
                        <Link to="/accessories">
                        <RenderCategories item={props.accessory} />
                        </Link>
                    </div>
                    <div className="col-4 col-md-3 mt-1">
                        <Link to="/jewellery">
                        <RenderCategories item={props.jewell} /> 
                        </Link>
                    </div>
                    
                </div>
            
            </div>
        </>
    );
}

export default Home;



