import React, { Component } from 'react';
import {
    Button,  Label,  Col, Form, FormGroup, Input, FormFeedback, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';




class CheckoutPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastname: '',
            phoneNum:'',
            email:'',
            custumization:'',
            paymentType: 'By Card',
            cardNum:'',
            expiry:'',
            cvv:'',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
                cardNum: false,
                expiry: false,
                cvv: false


            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName, phoneNum, email, cardNum, expiry, cvv ) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            cardNum:'',
            expiry:'',
            cvv:'',
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        const creg = /^\d+$/;
        if (this.state.touched.cardNum && !creg.test(cardNum)) {
            errors.cnumber = 'The card number should contain only numbers.';
        }

        const ereg = /^\d+$/;
        if (this.state.touched.expiry && !ereg.test(expiry)) {
            errors.expiry = 'Enter a valid date.';
        }

        const cvreg = /^\d+$/;
        if (this.state.touched.cvv && !cvreg.test(cvv)) {
            errors.cvv = 'Enter a valid cvv.';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row row-content align-items-center">
                        <div className='col-12 mt-3 mb-3'>
                        <h2>Enter Your Details</h2>
                        </div>
                        <div className="col-md-10">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            invalid={errors.firstName}
                                            onBlur={this.handleBlur("firstName")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.firstName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            invalid={errors.lastName}
                                            onBlur={this.handleBlur("lastName")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.lastName}</FormFeedback>
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="street" md={2}>Street Address</Label>
                                    <Col md={10}>
                                        <Input type="text" id="street" name="street"
                                            placeholder="Street Address"
                                            value={this.state.street}
                                            invalid={errors.street}
                                            onBlur={this.handleBlur("street")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.street}</FormFeedback>
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="city" md={2}>City</Label>
                                    <Col md={10}>
                                        <Input type="text" id="city" name="city"
                                            placeholder="City"
                                            value={this.state.city}
                                            invalid={errors.city}
                                            onBlur={this.handleBlur("city")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.city}</FormFeedback>
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="statenm" md={2}>State</Label>
                                    <Col md={10}>
                                        <Input type="text" id="statenm" name="statenm"
                                            placeholder="State"
                                            value={this.state.statenm}
                                            invalid={errors.statenm}
                                            onBlur={this.handleBlur("statenm")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.statenm}</FormFeedback>
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="zipcode" md={2}>Zipcode</Label>
                                    <Col md={10}>
                                        <Input type="text" id="zipcode" name="zipcode"
                                            placeholder="Zipcode"
                                            value={this.state.zipcode}
                                            invalid={errors.zipcode}
                                            onBlur={this.handleBlur("zipcode")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.zipcode}</FormFeedback>
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            value={this.state.phoneNum}
                                            invalid={errors.phoneNum}
                                            onBlur={this.handleBlur("phoneNum")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.phoneNum}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            invalid={errors.email}
                                            onBlur={this.handleBlur("email")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 4, offset: 2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox"
                                                    name="agree"
                                                    checked={this.state.agree}
                                                    onChange={this.handleInputChange} /> {' '}
                                                <strong>Do you want to customise the item?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="specifications" md={2}>Speifications</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="specifications" name="specifications"
                                            rows="12"
                                            value={this.state.specifications}
                                            onChange={this.handleInputChange}></Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    Payment Type
                                    <FormGroup check>
                                        <Col>
                                            <Label check>
                                                <Input type="radio"
                                                    name="paymentradios"
                                                    onChange={this.handleInputChange} /> {' '}
                                                    <i class="fa fa-paypal fa-lg" /> Paypal
                                            </Label>
                                        </Col>
                                        <Col>
                                            <Label check>
                                                <Input type="radio"
                                                    name="paymentradios"
                                                    onChange={this.handleInputChange} /> {' '}
                                                   <i class="fa fa-credit-card fa-lg" /> Credit card
                                            </Label>
                                        </Col>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="cname" md={2}>Name</Label>
                                        <Col md={10}>
                                            <Input type="text" id="cname" name="name"
                                                placeholder="Name"
                                                value={this.state.cname}
                                                invalid={errors.cname}
                                                onBlur={this.handleBlur("cname")}
                                                onChange={this.handleInputChange} />
                                                <FormFeedback>{errors.cname}</FormFeedback>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="cnumber" md={2}>Card Number</Label>
                                        <Col md={10}>
                                            <Input type="text" id="cnumber" name="cnumber"
                                                placeholder="Card Number"
                                                value={this.state.cnumber}
                                                invalid={errors.cnumber}
                                                onBlur={this.handleBlur("cnumber")}
                                                onChange={this.handleInputChange} />
                                                <FormFeedback>{errors.cnumber}</FormFeedback>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="cvv" md={2}>CVV</Label>
                                        <Col md={10}>
                                            <Input type="text" id="cvv" name="cvv"
                                                placeholder="cvv"
                                                value={this.state.cvv}
                                                invalid={errors.cvv}
                                                onBlur={this.handleBlur("cvv")}
                                                onChange={this.handleInputChange} />
                                                <FormFeedback>{errors.cvv}</FormFeedback>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="expiry" md={2}>Card Expiry</Label>
                                        <Col md={10}>
                                            <Input type="date" id="expiry" name="expiry"
                                                placeholder="expiry"
                                                value={this.state.expiry}
                                                invalid={errors.expiry}
                                                onBlur={this.handleBlur("expiry")}
                                                onChange={this.handleInputChange} />
                                                <FormFeedback>{errors.expiry}</FormFeedback>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="czipcode" md={2}>Zipcode</Label>
                                        <Col md={10}>
                                            <Input type="text" id="czipcode" name="czipcode"
                                                placeholder="Zip code"
                                                value={this.state.czipcode}
                                                invalid={errors.czipcode}
                                                onBlur={this.handleBlur("czipcode")}
                                                onChange={this.handleInputChange} />
                                                <FormFeedback>{errors.czipcode}</FormFeedback>
                                        </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={10}>
                                        <Checked />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            
            </React.Fragment>
        )
    }
}

class Checked extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModal: false
                
        };
    }
    
    toggleModal = () =>  {
        this.setState({
            isModal: !this.state.isModal
        });
    }

    
    handleSubmit() {
        this.toggleModal();
    }

    
    render() {
        return(
            <>
                <Button onClick={this.toggleModal} color="primary"> Submit
                </Button>
                <Modal isOpen={this.state.isModal} toggle={this.toggleModal}>
                    <ModalHeader style={{ background: "#abd4fa" }} toggle={this.toggleModal}>Confirmation</ModalHeader>
                    <ModalBody >
                        <h5>Thank you!. Your order is confirmed.</h5>
                        <Button><Link to='/home'>OK</Link></Button>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default CheckoutPage;