import React from "react";
import { Col, Row, Form, FormGroup } from 'reactstrap';

function ServiceBike(props) {
    return (
        <div class="container-fluid my-3" id="servicebike">
            <div class="row justify-content-around">
                <div class="col-md-7 bg-light shadow px-4 pt-4">
                    <h4 class="display-6 ">
                    <i class="fa fa-sign-in" aria-hidden="true"></i> Welcome to Ride In Gear</h4>
                    <p class="text-info">Steps for Customer and Owner to enter bike details</p>
                    <hr/>
                    <Form>
                        <FormGroup>
                            <Col>
                                <Row>
                                    <h3 class="text-lowercase"> <b> Steps for booking Bike for customer</b> </h3>
                                    <p class="text-lowercase"> 1. <span>i</span>f you are visiting the website then please do click on sign-up and select customer registration.
                                    <br/>2. <span>i</span>f you have already account then please do login for searching the Bike. 
                                    <br/>3. <span>a</span>fter successful login customer can search and book the Bike. 
                                    <br/>4. <span>t</span>o search the vehicle, please select the city name and Bike type. 
                                    <br/>5. <span>a</span>s per customer prefrence, available Bike will display on page  for booking. 
                                    <br/>6. <span>a</span>fter the booking Bike for rent you can check the status and update the order in customer profile.
                                    <br/>7. <span>a</span>fter Booking, customer have to make payment to take the Bike on rent.</p>
                                </Row>
                                <Row>
                                    <h4> <b> Documents required for Booking</b></h4>
                                    <p class="text-lowercase">1. <span>c</span>ustomer aadhar number. 
                                    <br/>2. <span>v</span>ehicle licence.  </p><br/>
                                </Row>
                                <hr/>
                                <Row>
                                    <h3> <b>Steps for registration of Bike for owner</b></h3><br/>
                                    <p class="text-lowercase">1. <span>i</span>f you are visiting the website then please do click on sign-up and select Owner Registration.
                                    <br/>2. <span>i</span>f you have already account then please do login for Registering the Bike. 
                                    <br/>2. <span>a</span>fter successful Login owner can register the Bike on website. 
                                    <br/>4. <span>f</span>or register the Bike owner have to click on "Add Vehicle". 
                                    <br/>5. <span>o</span>wner Can update and delete the Bike details. 
                                    <br/>6. <span>o</span>wner can Update his profile</p><br/>
                                </Row>
                                <Row>
                                    <h4> <b> Documents required for registration of Bike</b></h4>
                                    <p class="text-lowercase">1. <span>b</span>ike registration number and RC Documents.
                                    <br/>2. <span>b</span>ike insurance and PUC.  </p>
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

} export default ServiceBike;