import React, { Component } from "react";
import {  Button, Label, Input, FormGroup, Modal, ModalBody, ModalHeader, Form } from 'reactstrap';

class Renderfree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleAddfree(event) {
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        const freecomp = this.props.frees.map(free => {
            return(
                <div className="row postcard mt-4">
                    <div className="col-6  mt-3 mb-3 ">
                        <img src={free.image} alt={free.name} width="100%"/>
                    </div>
                    <div className="col-6 mt-3 mt-md-5 mb-3">
                        <h5 className="m-lg-5 text-primary"><i class="fa fa-user"/>{free.username}</h5>
                        <h5 className="m-lg-5">{free.name}</h5>
                        <h5 className="m-lg-5">{free.address}</h5>
                        <h6 className="m-lg-5">{free.description}</h6>
                        <Button className="m-lg-5"><i class="fa fa-envelope"/>Message</Button>
                    </div>
                </div>
            );
        });

       

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="mt-3" >Free/Give away</h2>
                        </div>
                        <div className="col-6 mt-3 d-flex justify-content-end"  >
                            <p>You have something to give away? </p>
                        </div>
                        <div className="col-12 mb-2 d-flex justify-content-end"  >    
                            <Button onClick={this.toggleModal} id="addItem2">Add item</Button>
                        </div>
                        <hr />
                    </div>
                        {freecomp}
                </div>

                <Modal id="sellModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add items</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleAddfree}>
                            <FormGroup>
                                <Label htmlFor="itemname">Enter item name</Label>
                                <Input type="text" id="itemname" name="itemname" 
                                    innerRef={input => this.crossroad = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="price">Enter item details/condition</Label>
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




export default Renderfree;