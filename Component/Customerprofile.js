import React from "react";
import { Container, Row, Col} from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Searchvehicle from "./Searchvehicle";
import Menu from "./Menu";
import Greet from "./Greet";
import Profile from "./Profile";
import Paymentbycid from "./Paymentbycid";
import Getcustomerbooking from "./Getcustomerbooking";

function Customerprofile() {
    return (
        <div style={{backgroundColor: ""}}>
            <Router>
                <Container>
                    <Row>
                        <Col md={3}>
                            <Menu /> 
                        </Col>
                        <Col md={9}>
                            <Route path='/greet' component={Greet} exact />
                            <Route path='/profile' component={Profile} exact/>
                            <Route path='/searchveh' component={Searchvehicle} exact/>
                            <Route path="/paymentbycid" component={Paymentbycid} exact />
                            <Route path="/getcustomerbooking" component={Getcustomerbooking}/>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}
export default Customerprofile;