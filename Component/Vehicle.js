import React from 'react';
import { Col, Button, Form,CustomInput, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Vehicle extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      vno:"",
      vname:"",
      vtype:"",
      city:"",
      category:"",
      insurence:"",
      image:"",
      oid:"",
      vehicle:{}
    }
  }
  handleChange=(e)=>{
    const nm=e.target.name;
    const val=e.target.value;
    this.setState({[nm]:val});
    console.log(nm);
    
    console.log(val);
    if(e.target.name==="image")
    {
    const nm1="oid";
    const val1=JSON.parse(localStorage.getItem("loggedinuser")).oid;
    this.setState({[nm1]:val1});
    console.log(nm1);
    console.log(val1);
  }
  }
  submitData=(e)=>{
    e.preventDefault();
    const reqOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        vno:this.state.vno,
        vname:this.state.vname,
        vtype:this.state.vtype,
        city:this.state.city,
        category:this.state.category,
        insurence:this.state.insurence,
        image:this.state.image,
        oid:this.state.oid,
        
        //status:this.state.status,
      })
    }
    fetch("http://localhost:8080/savevehicle",reqOptions)
    .then(resp=>resp.json())
    .then(data=> this.setState({vehicle:data}))
    //console.log(JSON.parse(localStorage.getItem("loggedinuser")).oid)
    this.props.history.push("/greet")
    toast.success('🚙 Vehicle Registration Done!', {position: "top-center", autoClose: 8000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  }
  render(){
  return (
    <div class="container-fluid my-3">
        <div class="row justify-content-around">
            <div class="col-md-12 bg-light shadow px-4 pt-4" id="div2">
                <h4 class="display-4">
                <i class="fa fa-car" aria-hidden="true"></i> Enter Vehicle Details</h4>
                <p class="text-secondary">Enter valid Vehicle details.</p>
                <hr/>
                <Form>
                    <FormGroup row>
                    <Label for="exampleVno" sm={2}>Vehicle No: </Label>
                    <Col sm={10}>
                    <Input type="text" name="vno" id="exampleVno" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Label for="exampleVname" sm={2}>Vehicle Name: </Label>
                    <Col sm={10}>
                    <Input type="text" name="vname" id="exampleVname" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <br/>
                    <FormGroup row>
                    <Label for="exampleVname" sm={2}>Vehicle Type: </Label>
                    <Col sm={10}>
                    <Input type="select" name="vtype" onChange={this.handleChange}>
                        <option>Select any one</option>
                        <option value="bike">Bike</option>
                        <option value="car">Car</option>
                    </Input>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Label for="exampleCity" sm={2}>Enter City: </Label>
                    <Col sm={10}>
                    <Input type="text" name="city" id="exampleCity" onChange={this.handleChange}>
                    <option hidden value="">Select any one city</option>
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
                    <Label for="exampleCategory" sm={2}>Vehicle Category: </Label>
                    <Col sm={10}>
                    <Input type="select" name="category" onChange={this.handleChange}>
                        <option>Select any one</option>
                        <option value="mini">MINI</option>
                        <option value="sedan">SEDAN</option>
                        <option value="SUV">SUV</option>
                        <option value="sports bike">Sports Bike</option>
                        <option value="cruiser bike">Cruiser Bike</option>
                        <option value="scooter">Scooter</option>
                    </Input>
                    </Col>
                    
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Label for="exampleInsurence" sm={2}>Insurance Details: </Label>
                    <Col sm={10}>
                    <Input type="text" name="insurence" id="exampleInsurence" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <br/>
                
                
                <FormGroup row>
                    <Label for="exampleI1" sm={2}>Self-Driven: </Label>
                    <Col sm={10}>
                    <Input type="select" id="exampleCustomFileBrowser" name="image" onChange={this.handleChange}>
                      <option hidden value="">Select any One</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      </Input>
                    </Col>
                </FormGroup>
                <br/>
                
                {/*<FormGroup row>
                    <Input type="hidden" name="oid" id="exampleOid" onChange={this.handleChange2}></Input>
                </FormGroup>*/}
                <FormGroup check row >
                    <Col >
                      <center>
                    <Button color="primary" onClick={this.submitData}>Submit</Button> &nbsp;
                    <Button type="reset" class="btn btn-danger"color="danger">Reset</Button>
                    <ToastContainer position="top-center"autoClose={8000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                    </center>
                    </Col>
                </FormGroup>
                </Form>
                <p></p>
            </div>
        </div>
    </div>
  );
}
}
export default Vehicle;