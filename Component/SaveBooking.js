import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarHome from "./NavbarHome";
import Footer from './Footer';

class SaveBooking extends React.Component {
    constructor(props)
  {
    const myCurrentDate = new Date();
    const date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();

    super(props)
    this.state={
      fdate:"",
      tdate:"",
      destto:"",
      destfrom:"",
      datetime:"",
      vid:"",
      tamt:"",
      booking:{},
      date1: new Date().toISOString().slice(0,10)
    }
  }
  handleChange=(e)=>{
    
    const nm=e.target.name;
    const val=e.target.value;
    this.setState({[nm]:val});
    console.log(nm);
    console.log(val);
    if(nm =="destfrom" | nm == "destto")
    {
      
      const nm1="datetime";
      const nm2="vid";
      const myCurrentDate = new Date();
      const date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();
      try{
      console.log(JSON.parse(localStorage.getItem("Bookedvehicle")).vid);
      this.setState({[nm2]:JSON.parse(localStorage.getItem("Bookedvehicle")).vid});
      var vtype=JSON.parse(localStorage.getItem("Bookedvehicle")).vtype;
      }
      catch(error){
        console.log(error);
      }
      e.preventDefault();
      this.setState({[nm1]:date})
      
      const date1=this.state.fdate;
      
      const date2=this.state.tdate;
      
      var msDiff = new Date(date1).getTime() - new Date(date2).getTime();    //Future date - current date
      var diffdays = Math.abs(msDiff / (1000 * 60 * 60 * 24));
      
      var total=null;
      
      if(vtype=="car")
      {
        total=diffdays*1500;
      
      }
      else
      {
        total=diffdays*700;
      
      }
      this.setState({["tamt"]:total});
      localStorage.setItem("totalamount",total);
    }
   
   
  }
   
  submitData=(e)=>{
    const reqOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        fdate:this.state.fdate,
        tdate:this.state.tdate,
        destto:this.state.destto,
        destfrom:this.state.destfrom,
        datetime:this.state.datetime,
        vid:this.state.vid
      })
    }
    fetch("http://localhost:8080/savebooking",reqOptions)
    .then(resp=>resp.json())
    .then(data=>{ 
        //alert(data);
        const json=JSON.parse(JSON.stringify(data));
        this.setState({booking:json});
        localStorage.setItem("Bookingdetails",JSON.stringify(this.state.booking));
        window.location.href="http://localhost:3000/savepayment";
    })
    //fetch("http://localhost:8000/")
    toast.success('✔ Booking Successfull!', {position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  }
  render(props){
        
    const length=this.state.tamt.length;
    let comp;
    if(length!=0)
    {
      comp=<p>Total Amount : {this.state.tamt}</p>
    }
  return (
    <div>
      
      
    <div >
    <NavbarHome />
    </div>
    <form>
    <div class="container-fluid my-3" id="savebookingbg">
      <div class="row justify-content-around">
            <div class="col-md-7 bg-light shadow px-4 pt-4" id="SaveBookingDiv">
              <center>
                <h4 class="display-4">
                <i class="fa fa-asterisk" aria-hidden="true"></i> Enter Booking Details </h4>
                <p class="text-primary">Enter valid Booking details.</p>
                </center>
                <hr/>
                
              <Form>
                  <FormGroup row>
                  <Label for="exampleDate" sm={10}>From Date :</Label>
                  <Col sm={12}>
                  <Input
                    type="date"
                    name="fdate"
                    id="exampleFdate"
                    min={this.state.date1}
                    placeholder="date placeholder"
                    onChange={this.handleChange}
                  />
                  </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                  <Label for="exampleDate" sm={10}>To Date:</Label>
                  <Col sm={12}>
                  <Input
                    type="date"
                    name="tdate"
                    id="exampleLdate"
                    min={this.state.date1}
                    placeholder="date placeholder"
                    onChange={this.handleChange}
                  />
                  </Col>
                </FormGroup>
                <br/>
                  
                <FormGroup row>
                  <Label for="exampleDestto" sm={10}>Enter Destination : </Label>
                  <Col sm={12}>
                  <Input type="select" name="destto" id="exampleLname" onChange={this.handleChange}>
                  <option hidden value="">Select any one</option>
                  <option value="Akola">Akola</option>
                          <option value="Amravati">Amravati</option>
                          <option value="Aurangabad">Aurangabad</option>
                          <option value="Ahmadnagar">Ahmadnagar</option>
                          <option value="Bhandara">Bhandara</option>
                          <option value="Bhusawal">Bhusawal</option>
                          <option value="Beed">Beed</option>
                          <option value="Buldhana">Buldhana</option>
                          <option value="Chandrapur">Chandrapur</option>
                          <option value="Daulatabad">Daulatabad</option>
                          <option value="Dhule">Dhule</option>
                          <option value="Jalgaon">Jalgaon</option>
                          <option value="Kalyan">Kalyan</option>
                          <option value="Konkan">Konkan</option>
                          <option value="kolhapur">kolhapur</option>
                          <option value="Mahabaleshwar">Mahabaleshwar</option>
                          <option value="Malegaon">Malegaon</option>
                          <option value="Matheran">Matheran</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Nagpur">Nagpur</option>
                          <option value="Nanded">Nanded</option>
                          <option value="Nashik">Nashik</option>
                          <option value="Osmanabad">Osmanabad</option>
                          <option value="Parbhani">Parbhani</option>
                          <option value="Pune">Pune</option>
                          <option value="Ratnagiri">Ratnagiri</option>
                          <option value="Sangli">Sangli</option>
                          <option value="Satara">Satara</option>
                          <option value="Solapur">Solapur</option>
                          <option value="Thane">Thane</option>
                          <option value="Vasai-vihar">Vasai-vihar</option>
                          <option value="Wardha">Wardha</option>
                          <option value="Yavatmal">Yavatmal</option>
                        </Input>



                  </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                  <Label for="exampleDestfrom" sm={10}>Enter Starting point : </Label>
                  <Col sm={12}>
                    <Input type="text" name="destfrom" id="exampleDestfrom" onChange={this.handleChange}/>
                  </Col>
                </FormGroup>
                <br/>
                 {comp}
                 <br/>
                <FormGroup check row>
                  <Col>
                  <center>
                    <Button color="primary"onClick={this.submitData}>Payment</Button> &nbsp;
                    <Button type="reset" class="btn btn-danger"color="danger">Reset</Button>
                    <ToastContainer position="top-center"autoClose={8000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                    </center>
                  </Col>
                </FormGroup>
                <br/>
              </Form>
              </div>
              </div>
              <div>
              <Footer />
              </div>
            </div>
            </form>
    </div>
  );
}}

export default SaveBooking;