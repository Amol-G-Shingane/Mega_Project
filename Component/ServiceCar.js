import React from "react";
import { Col, Row, Form, FormGroup } from 'reactstrap';


function ServiceCar(props) {
    return (
        <div>
            <div class="row justify-content-around" id="servicebike">
                <div class="col-md-7 bg-light shadow px-4 pt-4">
                    <h4 class="display-5 ">
                    <i class="fa fa-sign-in" aria-hidden="true"></i> Welcome to Ride In Gear</h4>
                    <p class="text-primary">Steps for Customer and Owner to enter car details</p>
                    <hr/>
                    <Form>
                        <FormGroup>
                            <Col>
                                <Row>
                                    <h4> <b> Steps for Booking Car for Customer</b> </h4>
                                    <p class="text-lowercase"> 1. If you are visitng the website then please do click on sign-up and select customer Registration.
                                    <br/>2. If you have already account then please do login for searching the car. 
                                    <br/>3. After Successful Login customer can search and book the Car. 
                                    <br/>4. To search the vehicle , please select the city name and Car type.
                                    <br/>5. As per customer prefrence, Available Car will display on page  for booking. 
                                    <br/>6. After the booking Car for rent you can check the status and update the order in customer profile.
                                    <br/>7. After Booking customer have to make payment to take the Car on rent.</p>
                                </Row>
                                <Row>
                                    <h4> <b> Documents Requirment for Booking</b></h4>
                                    <p>1. Customer Aadhar number. 
                                    <br/>2. Vehicle licence.  </p><br/>
                                </Row>
                                <hr/>
                                <Row>
                                <h4> <b>Steps for Registration of Car for Owner</b></h4><br/>
                                    <p>1. <span>i</span>f you are visitng the website then please do click on sign-up and select Owner Registration.
                                    <br/>2. <span>i</span>f you have already account then please do login for Registering the Car. 
                                    <br/>2. <span>a</span>fter Successful Login Owner can register the Car on website. 
                                    <br/>4. <span>f</span>or register the Car owner have to click on "Add Vehicle". 
                                    <br/>5. <span>o</span>wner Can update and delete the Car details. 
                                    <br/>6. <span>o</span>wner can Update his profile</p><br/>
                                </Row>
                                <Row>
                                    <h4> <b> Documents Required For Registration of Car</b></h4>
                                    <p>1. <span>c</span>ar Registration number and RC Documents.
                                    <br/>2. <span>c</span>ar Insurance and PUC.  </p>
                                    <a href="http://localhost:3000">HOME</a>
                                </Row>
                                <br/>
                                <hr/>
                                </Col>
                        </FormGroup>
                    </Form>
        </div>
    </div> 
</div>
       

    );

} export default ServiceCar;