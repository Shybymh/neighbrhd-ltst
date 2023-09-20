import React from "react";
import { Card, CardImg, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderJewellery({jewell}) {
    return(
        <Card>
            <Link to={`/jewellery/${jewell.id}`}>
                <CardImg width="100%" src={jewell.image} alt={jewell.name} />
                <CardBody><h5>{jewell.name}</h5> <h6> {jewell.price}</h6></CardBody>
            </Link>
        </Card>
    )
}


// painting={this.state.paintings.filter(painting => painting.featured)[0]}

function ShowJewellery(props) {
    const showjewellery = props.jewellery.filter(jewell => jewell.jewellerypage).map(jewell => {
       return (
            <div key={jewell.id} className="col-md-4 mt-1">
                <RenderJewellery jewell={jewell} />
            </div>
        );
    })

    return (
        <div className="container">
            <div className='row'>
                <div className='col mt-3'>
                    
                    <h2>Jewellery</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {showjewellery}
            </div>
        </div>
    );
}

export default ShowJewellery;