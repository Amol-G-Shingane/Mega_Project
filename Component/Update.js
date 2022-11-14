import React from 'react';
import { toast } from 'react-toastify';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NavbarHomeLogout from './NavbarHomeLogout'
import 'react-toastify/dist/ReactToastify.css';
import  Footer  from './Footer';


class Update extends React.Component{
    constructor(props)
  {  

    super(props)
    this.state={
      
      fname:"",
      lname:"",
      emailid:"",
      address:"",
      gender:"",
      contactno:"",
      licenseno:""      
    }
    
  }
    submitData=(e)=>{
        const reqOptions={
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            
            fname:this.state.fname,
            lname:this.state.lname,
            emailid:this.state.emailid,
            address:this.state.address,
            gender:this.state.gender,
            contactno:this.state.contactno,
            licenseno:this.state.licenseno
            
          })
        }
        fetch("http://localhost:8080//updatecustomerbyid/{loginid}",reqOptions)
        .then(resp=>resp.json())
        .then(data=> this.setState({customer:data}))
            window.location.href="http://localhost:3000/customerhome";
            toast.success('🚙 Updated Successfully!', {position: "top-center", autoClose: 8000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
        }
        
      
    
    render(){
        return(
            <div id="divUpdatebg">
                  <NavbarHomeLogout />
                <div >
                    <form>
                    <div class="container-fluid my-3" >
                  <div class="row justify-content-around" >
                  <div class="col-md-7 bg-light shadow px-4 pt-4" id="divUpdate">
                    <center>
                      <h4 class="display-4">
                      <i class="fa fa-clone" ></i> Update Profile </h4>
                      <p class="text-primary">Enter the details you want to update</p>
                      </center>
                      <hr/>
                    <Form >
                          <FormGroup row>
                            <Label sm={10}>Enter First Name: </Label>
                            <Col sm={12}>
                                <Input type="text" name="fname" onChange={this.handleChange}/>                                                   
                                
                            </Col>
                          </FormGroup>
                          <br/>
                          <FormGroup row>
                            <Label sm={10}>Enter Last Name: </Label>
                            
                            <Col sm={12}>
                                <Input type="text" name="lname" onChange={this.handleChange}/>
                                  
                                
                            </Col>
                          </FormGroup>
                          <br/>
                          <FormGroup row>
                            <Label sm={10}>Enter Email ID: </Label>
                            
                            <Col sm={12}>
                                <Input type="text" name="emailid" onChange={this.handleChange}/>
                                  
                                
                            </Col>
                          </FormGroup>
                          <br/>
                          <FormGroup row>
                            <Label sm={10}>Enter Address: </Label>
                            
                            <Col sm={12}>
                                <Input type="text" name="address" onChange={this.handleChange}/>
                                  
                                
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm={10}>Enter Gender: </Label>
                            
                            <Col sm={12}>
                                <Input type="text" name="gender" onChange={this.handleChange}/>
                                  
                                
                            </Col>
                          </FormGroup>
                          
                          <br/>
                          <FormGroup row>
                            <Label sm={10}>Enter Contact no: </Label>
                            
                            <Col sm={12}>
                                <Input type="text" name="contactno" onChange={this.handleChange}/>
                                  
                                
                            </Col>
                          </FormGroup>
                          <br/>
                          
                          <FormGroup row>
                            <Label sm={10}>Enter License no: </Label>
                            
                            <Col sm={12}>
                                <Input type="text" name="licenseno" onChange={this.handleChange}/>
                                  
                                
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
                  
                  </div>
                </div>
                </div>
                </form>
              </div>
              
              <Footer/>
              </div>
              );
           
    }
}

export default Update;