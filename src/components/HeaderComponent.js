import React, { Component }  from 'react';
import { Nav, Navbar,  NavbarToggler, Collapse, NavItem, 
Button, Modal, ModalHeader, ModalBody, Form , FormGroup, Input, Label, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown   } from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';

// Header Component rendering Jumbotron and Navigation bar

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <img src='/assets/images/header3.jpg' alt='neighborhood' width="100%" height="150px"/>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        {/* <NavbarBrand className="mr-auto"  href="/home"><h4>MyNeighborhood</h4></NavbarBrand> */}
                        {/* <NavbarBrand className="mr-auto"  to="/home"><h4>MyNeighborhood</h4></NavbarBrand> */}
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/home">MyNeighborhood
                                </NavLink>
                                </NavItem>

                                    <UncontrolledDropdown nav inNavbar >
                                        <DropdownToggle nav >
                                        Shop local
                                        </DropdownToggle>
                                        <DropdownMenu right className="dropdown">
                                            <DropdownItem className="dropdownitem"><Link to='/paintings'>
                                            Paintings</Link>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem className="dropdownitem"><Link to='/accessories'>
                                                Accessories</Link>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem className="dropdownitem"><Link to='/jewellery'>
                                            Jewellery</Link>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem className="dropdownitem"><Link to='/artists'>
                                            Artists</Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/services"> Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/events"> Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/free"> Free 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/sell"> Sell
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text text-light ms-auto" onClick={this.toggleModal}><i class="fa fa-lg fa-user"/>{' '}{this.state.status}</span>
                            
                        </Collapse>
                    </div>
                </Navbar>

                {/* <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><h4>Neighborhood Makers and Crafters</h4></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                
                                <NavItem>
                                <NavLink className="nav-link text-light" to="/paintings"> Paintings
                                    </NavLink>
                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/accessories"> Accessories
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/jewellery"> Jewellery
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-light" to="/artists"> Artists
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text text-light ml-auto" onClick={this.toggleModal} >Login</span>
                        </Collapse>
                    </div>
                </Navbar> */}
                

                <Modal id="loginModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" 
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={input => this.remember = input} />
                                Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;