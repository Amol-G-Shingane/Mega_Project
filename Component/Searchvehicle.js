import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Searchvehicle extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      city:"",
      vtype:"",
      vehicle:[],
      abc:{},
      error:"",
      notify:false,
      show:false
    }
  }
  handleChange=(e)=>{
      const nm=e.target.name;
      const val=e.target.value;
      this.setState({[nm]:val});
    }
    submitData = () => {
      this.setState({show:true})
      const city=this.state.city;
      const vtype=this.state.vtype;
      //alert("http://localhost:8080/searchveh/"+city+"/"+vtype)
          fetch('http://localhost:8080/searchveh/'+city+'/'+vtype,
          {
              method:'GET',
              headers:{
                  'Content-Type': 'application/json'                     
              }
          })
          .then(resp=>resp.json())
          .then(data=>{
            if(data.length>0){
              this.setState({vehicle:data}) 
              this.setState({notify:false})
              console.log("kuch")
            }else{
              this.setState({notify:true})
              console.log("kuch nahi")
            }
             
        })
          .then(console.log("Vehicle by city and vtype"))
          .catch(err=>console.log("error"))
          //window.location.href="http://localhost:3000/searchveh"
  }
    gotobooking = (vid) => {
      //alert(vid);
          fetch('http://localhost:8080/getvehbyid/'+vid,
          {
              method:'GET',
              headers:{
                  'Content-Type': 'application/json'                     
              }
          })
          .then(resp=>resp.text())
          .then(data=>{
            const json=JSON.parse(data);
            this.setState({abc:json});
            localStorage.setItem("Bookedvehicle",JSON.stringify(this.state.abc));      
          })
          .catch(err=>console.log("error"));
          //this.props.history.push("/booking");
          window.location.href="http://localhost:3000/savebooking";
  }
    render(props){
      const length=this.state.vehicle.length;
      let comp;
if(this.state.show){
      if(this.state.notify)
      {      
          comp=<h4 class="text-danger" style={{textAlign:'center'}}>Vehicle not found<br/></h4>
          
      }

      else{
          comp=<div>
          <table class="table table-hover table-striped">
          <thead>
                  <tr>
                      <th>Vehicle ID</th>
                      <th>Vehicle Number</th>
                      <th>Vehicle Name</th>
                      <th>Vehicle Type</th>
                      <th>City</th>
                      <th>Category</th>
                      <th>Insurence</th>
                      <th>Action</th>
                  </tr>
              </thead>
              {this.state.vehicle.map(
                  (obj,i)=>{
                      return(
                      <tbody key={i}>
                      <tr>
                      <td>{obj.vid}</td>
                      <td>{obj.vno}</td>
                      <td>{obj.vname}</td>
                      <td>{obj.vtype}</td>
                      <td>{obj.city}</td>
                      <td>{obj.category}</td>
                      <td>{obj.insurence}</td>
                      <td><Button color="primary" onClick={()=>this.gotobooking(obj.vid)}>BOOK</Button></td>
                      </tr>
                      </tbody>
                          )
                      }
                   )

              }
          </table>
          </div>
      }}
        return(
          
          <div>
            <br/>
            <div class="row justify-content-around" id="div2">
            <div class="col-md-12 bg-light shadow px-4 pt-4">
              <center>
                <h4 class="display-4">
                <i class="fa fa-search" aria-hidden="true"></i> Search Vehicle </h4>
                <p class="text-primary">Enter your choice to search vehicle</p>
                </center>
                <hr/>
              <Form>
                    <FormGroup row>
                      <Label sm={2}>Enter city </Label>
                      <Col sm={10}>
                          <Input type="select" name="city" onChange={this.handleChange}>
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
                      <Label sm={2}>Enter Vehicle type </Label>
                      
                      <Col sm={10}>
                          <Input type="select" name="vtype" onChange={this.handleChange}>
                            <option hidden value="">Select any one</option>
                            <option value="car">CAR</option>
                            <option value="bike">BIKE</option>
                          </Input>
                      </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup check row>
                        <Col>
                          <center>
                            <Button color="primary" onClick={this.submitData}>Submit</Button> &nbsp;
                            <Button type="reset" class="btn btn-danger"color="danger" onClick={()=>{this.setState({show:false})}}>Reset</Button>
                            </center>
                        </Col>
                    </FormGroup>
                    <br/>
              </Form>
            {comp}
            </div>
          </div>
        </div>
        )
    }
}
export default Searchvehicle;