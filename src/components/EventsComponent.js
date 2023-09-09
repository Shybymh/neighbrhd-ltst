import React from "react";



function EventsComp(props) {
    const showeven = props.events.map(evens => {
        return ( 
                
            <div className="row postcard mt-3">
                <div className="col-6 mt-3 mb-3">
                    <img src={evens.image} alt={evens.name} width="100%"/>
                </div>
                <div className="col-6 mt-3 mt-md-5 mb-3">
                    <h2 className="m-lg-5">{evens.name}</h2>
                    <h5 className="m-lg-5">{evens.venue}</h5>
                    <h5 className="m-lg-5">{evens.time}, {evens.date}</h5>
                    <h6 className="m-lg-5">{evens.description}</h6>
                </div>
            </div>
        );
    });

   
    return (
        <div className="container">
            <h2 className="m-3" >Upcoming Events</h2>
            <hr />
            {showeven}
        </div>
    );

}

export default EventsComp;