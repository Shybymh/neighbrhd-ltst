import React, { Component } from "react";
import {  Button, Label, Input, FormGroup, Modal, ModalBody, ModalHeader, Form } from 'reactstrap';

class Rendersell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleAddsell(event) {
        this.toggleModal();
        event.preventDefault();
    }


    render() {
        const sellcomp = this.props.sells.map(sell => {
            return(
                <div className="row postcard mt-4">
                    <div className="col-6  mt-3 mb-3 ">
                        <img src={sell.image} alt={sell.name} width="100%"/>
                    </div>
                    <div className="col-6 mt-3 mt-md-5 mb-3">
                        <h5 className="m-lg-5 text-primary"><i class="fa fa-user"/>{sell.username}</h5>
                        <h5 className="m-lg-5">{sell.name}</h5>
                        <h6 className="m-lg-5">{sell.address}</h6>
                        <h6 className="m-lg-5">{sell.description}</h6>
                        <Button className="m-lg-5"><i class="fa fa-envelope"/>Message</Button>
                       
                    </div>
                </div>
            
            );
        });
        

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h2 className="mt-3" >Sell/Buy</h2>
                        </div>
                        <div className="col-8 mt-3 d-flex justify-content-end"  >
                            <p>You have something to sell ? </p>
                            </div>
                        <div className="col-12 mb-2 d-flex justify-content-end"  >    
                        <Button onClick={this.toggleModal} id="addItem1">Add item</Button>
                        </div>
                        <hr />
                    </div>
                        {sellcomp}
                </div>

                <Modal id="sellModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Add items to sell </ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleAddsell}>
                                <FormGroup>
                                    <Label htmlFor="itemname">Enter item name</Label>
                                    <Input type="text" id="itemname" name="itemname" 
                                        innerRef={input => this.crossroad = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="price">Enter item details and price</Label>
                                    <Input type="text" id="price" name="price" 
                                        innerRef={input => this.crossroad = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="photo">Add a picture of the item</Label>
                                    <Input type="file" multiple accept="image/*" id="photo" name="photo" 
                                        innerRef={input => this.name = input} />
                                </FormGroup>
                                
                                <Button className="mt-1" type="submit" value="submit" color="primary">Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>

            </>
        )
    }
}

export default Rendersell;
