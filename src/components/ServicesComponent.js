import React from "react";
import { Card, CardBody, CardTitle,  CardText } from 'reactstrap';

function Renderservices(props) {
    const servicecomp = props.services.map(service => {
        return(
            <div className="col-md-6 mt-4">
                <Card outline color="info">
                    <CardBody>
                        <CardTitle>{service.name}</CardTitle>
                        <hr />
                        <CardText>{service.contact1}</CardText>
                        <CardText>{service.contact2}</CardText>
                        <CardText>{service.contact3}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    });

    
    return (
        <div className="container">
            
                <h2 className="m-3">Services</h2>
                <hr />
                <div className="row">
                {servicecomp}
                </div>
            
        </div>
    )
}




export default Renderservices;
