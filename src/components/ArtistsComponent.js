import React from "react";
//import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
//import { Media } from 'reactstrap';





// function RenderArtists({artist}) {
//     return(
       
//         <div>
        
//         </div>

//     )
// }

// Renders Breadcrumb, heading and campsites' images and names 
// painting={this.state.paintings.filter(painting => painting.featured)[0]}

function ShowArtists(props) {
    const showartists = props.artists.map(artist => {
       return (
            <div key={artist.id} className="row m-3">
                <div className="col-sm-6">
                   <img src={artist.image} width="70%" alt="artist"/>
                </div>
                <div className="col-sm-6 text-align-center">
                  <h5> <strong> {artist.name} </strong> </h5>
                    <i class="fa fa-star" />{' '}
                    <i class="fa fa-star"/> {' '}
                    <i class="fa fa-star"/> {' '}
                    <i class="fa fa-star"/> {' '}
                    <i class="fa fa-star"/>
                    <p>{artist.sales} sales</p>
                  
                  <h6 className="mt-3"> {artist.description} </h6>
                  <i class="fa fa-envelope fa-lg text-primary"/> Contact
                </div>
                {/* <div className="col-sm-4 text-align-center">
                  <h6> <strong> {artist.name} </strong> <br /> {artist.description} </h6>
                </div> */}


                {/* <RenderArtists artist={artist} /> */}
            </div>
        );
    })

    return (
        <div className="container">
            <div className='row'>
                <div className='col'>
                    
                    <h2>Artists</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {showartists}
            </div>
        </div>
    );
}

export default ShowArtists;



 // <Card>
            // {/* <Link to={`/directory/${campsite.id}`}> */}
            //     {/* <CardImg width="100%" src={artist.image} alt={artist.name} />
            //     <CardBody><h6>{artist.name}</h6></CardBody> */}
            // {/* </Link> */}

            // {/* <CardImg width="100%" src={artist.image} alt="Artist Logo" />
        // <CardBody>
        //   <CardTitle>{artist.name}</CardTitle>
        //   <CardText><small>{artist.description}</small></CardText>
        // </CardBody>

        // </Card> */}