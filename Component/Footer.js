import React from "react";

class Footer extends React.Component{
render(){
    return( 
               
        <div class="p-3 mb-2 bg-dark text-white" id="footer1">        
            <div class="container text-center text-md-left">            
                <div class="row">            
                    <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">            
                        <h5 class="font-weight-bold text-uppercase mb-4"> Content</h5>
                        <p>Having Range of Vehicles which will perfectly fit your trip and make your every special occassion more memorable.</p>
                    </div>
                    &emsp;
                    &emsp;
                    &emsp;
                    &emsp;
                        <hr class="clearfix w-100 d-md-none" />
                
                    <hr class="clearfix w-100 d-md-none"/>
                    <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                        <h5 class="font-weight-bold text-uppercase mb-4">Contact</h5>
                        <ul class="list-unstyled">
                            <li>
                                <p>
                                    <i class="fa fa-home mr-3"></i> Ride in Gear, Hinjewadi, Pune, India<br/>
                                    <i class="fa fa-envelope mr-3"></i> info@rideingear.in<br/>
                            
                    
                    <i class="fa fa-phone mr-3"></i> + 91 8329773476 </p>
                </li>
                </ul>

            
            
            </div>


            <hr class="clearfix w-100 d-md-none"/>

            <div class="col-md-2 col-lg-2 text-center mx-auto my-4">


                <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>

                <a type="button" className="btn-floating btn-tw display-6" href="https://twitter.com/RideInGear">
                <i className="fa fa-twitter"></i>
                </a>
                &emsp;

                <a type="button" class="btn-floating btn-gplus display-6" href="https://www.instagram.com/ride_in_gear/">
                <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <br/>

                <a type="button" class="btn-floating btn-dribbble display-6" href="https://www.facebook.com/profile.php?id=100086068719996">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                &emsp;

                <a type="button" class="btn-floating btn-dribbble display-6" href="https://github.com/Amol-G-Shingane/CDAC_Project.git">
                <i class="fa fa-chrome" aria-hidden="true"></i>
                </a>
            </div>
            </div>
        </div>
    </div>
    );
}
}
export default Footer;