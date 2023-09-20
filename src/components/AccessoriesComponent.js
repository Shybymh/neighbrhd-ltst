import React from "react";
import { Card, CardImg, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderAccessories({accessory}) {
    return(
        <Card>
            <Link to={`/accessories/${accessory.id}`}>
                <CardImg width="100%" src={accessory.image} alt={accessory.name} />
                <CardBody><h5>{accessory.name}</h5> <h6> {accessory.price}</h6></CardBody>
            </Link>
        </Card>
    )
}


function ShowAccessories(props) {
    const showaccessories = props.accessories.filter(accessory => accessory.accessorypage).map(accessory => {
       return (
            <div key={accessory.id} className="col-md-4 mt-1">
                <RenderAccessories accessory={accessory} />
            </div>
        );
    })

    return (
        <div className="container">
            <div className='row'>
                <div className='col mt-3'>
                    
                    <h2>Accessories</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {showaccessories}
            </div>
        </div>
    );
}

export default ShowAccessories;