import React from "react";

import Footer from "./Footer";

class About extends React.Component {
  render(props){
  
  return (
    
    <div id="aboutus">
      <br/>
      <br/>
      <center>
        <h1  >
          <b>

          <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
          <span >A</span> 
          <span >B</span> 
          <span >O</span>
          <span >U</span>
          <span >T</span>&nbsp;
          <span >U</span> 
          <span >S</span>
          <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

          </b>
        </h1>
        </center>
        <hr/>
        <br/>
        <br/>
        <h4>
        <p ><b>
         Provide all facilities which will benificial for Customer as well as Owner. <br/>
          Searching of vehicle on rent can be easily available for Customer & Owner can register their vehicles. <br/>
         User has to Login through the site for bookings and Registering their vehicles.
         
        <br/>

        
        
     
        </b>
        </p>
        <br/>
        </h4>
        
        <br/>
  
     
     
<h1><b>Our Team Members</b></h1>
<br/>
<div class="container text-center" >
  <div className="row">
    <div className="col">
    <div class="card" id="photu">
  <img src="/img/Amol.jpeg"class="card-img-top" alt="..." width ="300"   height="200px"></img>
  <div class="card-body" >
    <h5 class="card-title" >Mr. Amol Shingane</h5>
      {/*<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
    </div>



    <div className="col">
    <div class="card" id="photu">
  <img src="/img/Shailesh.jpg" class="card-img-top" alt="..."  width ="300" height="200px"></img>
  <div class="card-body">
    <h5 class="card-title">Mr. Shailesh Dalavi</h5>
  {/*<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */} 
  </div>
</div>
    </div>


    <div className="col">
    <div class="card" id="photu">
  <img src="/img/Shubham.jpg" class="card-img-top" alt="..." width ="300"  height="200px"></img>
  <div class="card-body">
    <h5 class="card-title">Mr. Shubham Bhatia</h5>
    {/*<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" id="photu">
  <img src="/img/Samadhan.jpg" class="card-img-top" alt="..."  width ="300" height="200px"></img>
  <div class="card-body">
    <h5 class="card-title">Mr. Samadhan Lawate</h5>
  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
  </div>
</div>
    </div>


    <div className="col">
    <div class="card" id="photu">
  <img src="/img/Sangeeta.jpeg" class="card-img-top" alt="..."  width ="300" height="200px"></img>
  <div class="card-body">
    <h5 class="card-title">Miss.Sangeeta Choudhary</h5>
    {/*<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
    </div>


    <div className="col">
    <div class="card" id="photu">
  <img src="/img/Tejaswini.jpg" class="card-img-top" alt="..."  width ="300" height="200px"></img>
  <div class="card-body">
    <h5 class="card-title">Miss.Tejaswini Kolhekar</h5>
    {/*<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
    </div>



  </div>
</div>





{/*<img src="/img/images/Amol.jpeg" alt=" " width="300" height="300"></img>
        <img src="/img/images/Samadhan.jpg" alt=""  width="300" height="300" ></img>
        <img src="/img/images/Shailesh.jpeg" alt=" " width="300" height="300" ></img> 
        <img src="/img/images/Shubham.jpeg" alt=""  width="300" height="300" ></img>
  <img src="/img/images/Tejaswini.jpeg" alt="" width="300" height="300" ></img>*/}
  





<br/>
        <Footer />
    </div>
     );
}
}

export default About;