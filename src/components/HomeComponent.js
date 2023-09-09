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
                    <CardText className="text-white"><Link to='/eventscomp'>View more events</Link></CardText>
                </CardBody>
            </Card>
        </div>
     )
 }

//  function RenderDeals({deal}) {
   
//     return (
//         <div>
//             <Card outline color="dark">
//                 <img
//                     alt="Deal"
//                     src={ deal.image}
//                     width="100%" height="100%"
//                 />
//                 <CardImgOverlay >
                    
//                     <CardText tag="h1" className="text-white"><Badge pill bg="danger">New</Badge></CardText>
//                     <CardText tag="h2" className="text-white"><strong>{deal.name}</strong></CardText>
//                     <CardText tag="h2" className="text-white"><strong>{deal.shop}</strong></CardText>
//                     <CardText tag="h3" className="text-white"><strong>{deal.offer}  {deal.details}</strong></CardText>
//                     <CardText tag="h3" className="text-white"><strong>{deal.date}</strong></CardText>
//                 </CardImgOverlay>
                
//             </Card>
//         </div>
//     )
       
// }

// Renders Breadcrumb, heading and campsites' images and names 

function Home(props) {
   

    return (

        // <>
        //     <div className="container-fluid">
                
        //         <div className="row justify-content-center">
        //             <div className="col-md-8">
        //                 <h2 className="mt-5" >Upcoming Events</h2>
        //                 <hr />
        //                 <RenderEvents eent={props.eVent}
        //                 />
        //             </div>
        //         </div>
            
        //         <div className='row justify-content-center'>
        //             <div className='col-9 text-center '>
        //                 <h2 className="mt-5">From Our Local Artists</h2>
        //                 <hr />  
        //             </div>
        //         </div>
        //         <div className="row  justify-content-center">
        //             <div className="col-4 col-md-3 mt-1">
        //                 <Link to="/paintings">
        //                 <RenderCategories 
        //                     item={props.painting}
        //                 />
        //                 </Link>
        //             </div>
        //             <div className="col-4 col-md-3 mt-1">
        //                 <Link to="/accessories">
        //                 <RenderCategories item={props.accessory} 
        //                 />
        //                 </Link>
        //             </div>
        //             <div className="col-4 col-md-3 mt-1">
        //                 <Link to="/jewellery">
        //                 <RenderCategories item={props.jewell}
        //                 /> 
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="row justify-content-center">
        //             <div className="col-md-8">
        //                 <h2 className="mt-5" >Todays Deals</h2>
        //                 <hr />
        //                 <RenderDeals  deal={props.deaL}
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </>
       //888888888888888888888888888888888888888

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



