import React from "react";


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



 