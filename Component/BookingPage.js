import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function BookingPage(){
    return(
        <div style={{backgroundColor: "lightsteelblue"}}>
            <div style={{position: 'absolute', top: '0px', left: '0px', height: '80px', right: '0px', overflow: 'hidden'}}>
                <Header />
            </div>
            <div style={{position: 'absolute', top: '80px', bottom: '120px', left: '0px', right: '0px', overflowY: 'scroll'}}>
                <Router>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <Menu/> 
                            </Col>
                            <Col md={9}>
                                <Route path='/savebooking' component={SaveBooking} />
                            </Col>
                        </Row>
                    </Container>
                </Router>
            </div>
            <div style={{position: 'absolute', bottom: '0px', height: '190px', left: '0px',  right: '0px', overflow: 'hidden'}}>
                <Footer />
            </div>
        </div>
    );
}
export default BookingPage;