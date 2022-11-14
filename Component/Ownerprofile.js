import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';

import Getvehicle from "./Getvehicle";
import Greet from "./Greet";
import MenuO from "./MenuO";
import ProfileO from "./ProfileO";
import SaveBooking from "./SaveBooking";
import Vehicle from "./Vehicle";

function Ownerprofile() {
    return (
        <div >
            <Router>
                <Container>
                    <Row>
                        <Col md={3}>
                            <MenuO/> 
                        </Col>
                        <Col md={9}>
                            
                            <Route path='/greet' component={Greet} exact />
                            <Route path='/profileo' component={ProfileO}/>
                            <Route path='/getvehbyoid' component={Getvehicle}/>
                            <Route path='/addveh' component={Vehicle}/>
                            <Route path='/savebooking' component={SaveBooking}/>
                            
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}
export default Ownerprofile;