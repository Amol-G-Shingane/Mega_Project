import React from "react";
import { Container, Row, Col} from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuA from "./MenuA";
import GreetA from "./GreetA";
import Getveh from "./Getveh";
import Getcustomer from "./Getcustomer";
import Getpayment from "./Getpayment";
import Getbooking from "./Getbooking";
import Getowner from "./Getowner";


function Adminprofile() {
    return (
        
        <div style={{backgroundColor: "" }} >
            <Router>
                <Container>
                    <Row>
                        <Col md={3}>
                            <MenuA /> 
                        </Col>
                        <Col md={9}>
                            <Route path='/greeta' component={GreetA} exact />
                            <Route path="/getveh" component={Getveh}/>
                            <Route path="/getcustomer" component={Getcustomer}/>
                            <Route path="/getpay" component={Getpayment}/>
                            <Route path="/getbooking" component={Getbooking}/>
                            <Route path="/getowner" component={Getowner}/>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}
export default Adminprofile;