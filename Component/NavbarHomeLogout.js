import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Service from './Service';
import Gallery from './Gallery';
import About from './About';
import Footer from './Footer';
import {CardBody, Card} from "reactstrap";
import { Button, NavbarBrand } from 'reactstrap';


class NavbarHomeLogout extends React.Component{
    constructor(props) {
        super(props);
    }
     

    render() {
       
        return (
            <div id="navbarfixed1">
                 <Card >            
                <CardBody>
               <h1 style={{fontFamily: 'Rockwell'}} className="text-left my-0" > <img height="3%" width="3%"  src="/img/logo.png"/> Ride in Gear  
               </h1>
                </CardBody>                
            </Card>    
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Container>
                                       
                    <Navbar.Brand href="/"style={{fontFamily: 'inherit'}} >DASHBOARD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="/abouthome">About</Nav.Link>
                        
                        <Nav.Link href="#footer">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                        <NavDropdown title="Sign Up" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/creg">Customer SignUp</NavDropdown.Item>
                            <NavDropdown.Item href="/oreg"> Vehicle Owner SignUp</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={2} href="/login">
                        <Button id="loginbtn">Logout</Button>
                        
                        </Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Container>
                        <Router>
                            <Route path="/service" component={Service} />
                            <Route path="/gallery" component={Gallery} />
                            
                            <Route path="/footer" component={Footer} />
                        </Router>
                    </Container>
                </div>
                
        </div>
        );
    }

}
export default NavbarHomeLogout;