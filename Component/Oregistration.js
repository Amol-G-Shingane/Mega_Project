import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Oregistration extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      uname:"",
      pwd:"",
      fname:"",
      lname:"",
      email:"",
      address:"",
      gender:"",
      contactno:"",
      adharno:"",
      owner:{},
      errors: {
        usererror:"",
        emailerror:"",
        pwderror:"", 
        fnameerror:"",
        lnameerror:"",
        contacterror:"",
        adharerror:""
    },
    uservalid: false,
    emailvalid: false,
    pwdvalid: false,
    fnamevalid: false,
    lnamevalid: false,
    contactvalid: false,
    adharvalid: false,
    flag: false,
    formvalid: false
    }
  }
  handleChange=(e)=>{
    const userPattern = /^[a-zA-Z0-9].{2,10}$/
    const emailPattern = /^[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{2,9}[\.][a-z]{2,5}$/
    const pwdPattern = /^[A-Za-z0-9@].{5,20}$/
    const fnamePattern =/^[a-zA-Z ]{2,40}$/
    const lnamePattern =/^[a-zA-Z ]{2,40}$/
    const contactPattern = /^[7-9]{1}[0-9]{9}$/
    const adharPattern = /^[2-9]{1}[0-9]{11}$/
    const input = e.target;
    const nm = input.name;
    const val = input.value;
    let errors = this.state.errors;
    let emailflag = this.state.emailvalid;
    let pwdflag = this.state.pwdvalid;
    let fnameflag = this.state.fnamevalid;
    let lnameflag = this.state.lnamevalid;
    let contactflag = this.state.contactvalid;
    let adharflag = this.state.adharvalid;
    let userflag = this.state.uservalid;

    switch(nm)
    {
        case 'uname':
            if(!userPattern.test(val))
            {
                errors.usererror = "* Must contain min 3 char or numbers.";
                userflag = false;
            }
            else
            {
                errors.usererror ="";
                userflag = true;
            }    
            break;
        case 'email':
            if(!emailPattern.test(val))
            {
                errors.emailerror = "Invalid email id....";
                emailflag = false;
            }
            else
            {
                errors.emailerror = "";
                emailflag = true;
            }
            break;
        case 'pwd':
            if(!pwdPattern.test(val))
            {
                errors.pwderror = "* Password must contain min 6 char or numbers ";
                pwdflag = false;
            }
            else
            {
                errors.pwderror ="";
                pwdflag = true;
            }
            break;

            case 'fname':
                if(!fnamePattern.test(val))
                {
                    errors.fnameerror = "Invalid First name...";
                    fnameflag = false;
                }
                else
                {
                    errors.fnameerror ="";
                    fnameflag = true;
                }
               break;
                case 'lname':
                    if(! lnamePattern.test(val))
                    {
                        errors.lnameerror = "Invalid last name...";
                        lnameflag = false;
                    }
                    else
                    {
                        errors.lnameerror ="";
                        lnameflag = true;
                    }
                    break;
        case 'contactno':
            if(!contactPattern.test(val))
            {
                errors.contacterror = "Invalid Contact No...";
                contactflag = false;
            }
            else
            {
                errors.contacterror = "";
                contactflag = true;
            }
            break;
        case 'adharno':
            if(!adharPattern.test(val))
            {
                errors.adharerror = "Invalid Adhar No...";
                adharflag = false;
            }
            else
            {
                errors.adharerror = "";
                adharflag = true;
            }
            break;
    } 
    this.setState({errors,[nm]: val,uservalid: userflag, emailvalid: emailflag, pwdvalid: pwdflag, fnamevalid: fnameflag, lnamevalid: lnameflag, contactvalid: contactflag, adharvalid: adharflag}, ()=>{this.setState({formvalid: this.state.uservalid && this.state.emailvalid && this.state.pwdvalid && this.state.contactvalid && this.state.adharvalid} )})
  }
  submitData=(e)=>{
    e.preventDefault();
    const reqOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        uname:this.state.uname,
        pwd:this.state.pwd,
        fname:this.state.fname,
        lname:this.state.lname,
        email:this.state.email,
        address:this.state.address,
        gender:this.state.gender,
        contactno:this.state.contactno,
        adharno:this.state.adharno
      })
    }
    fetch("http://localhost:8080/registero",reqOptions)
    .then(resp=>resp.json())
    .then(data=> this.setState({owner:data}))
    window.location.href = "http://localhost:3000/login";
    toast.success('???? Registration Successfull!', {position: "top-center", autoClose: 8000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  }
  render(props){
  return (
    <div class="container-fluid my-3">
        <div class="row justify-content-around">
            <div class="col-md-7 bg-light shadow px-4 pt-4" id="div2">
                <h4 class="display-4">
                <i class="fa fa-user-plus" aria-hidden="true"></i> Vehicle Owner Sign Up</h4>
                <p class="text-secondary">Enter valid sign up details.</p>
                <hr/>
            <Form>
            <FormGroup row>
                    <Label for="exampleUname">Enter User ID : </Label>
                        <Col sm={12}>
                            <input type="text" id="uname" className="form-control" name="uname" onChange={this.handleChange} />
                            <p class="text-danger">{this.state.errors.usererror}</p>
                        </Col>
                    </FormGroup>
                <br/>
                <FormGroup row>
                    <Label for="examplePwd">Enter Password</Label>
                    <Col sm={12}>
                        <input type="password" id="pwd" className="form-control" name="pwd" onChange={this.handleChange} />
                        <p class="text-danger">{this.state.errors.pwderror}</p>
                    </Col>
                </FormGroup>
                <br/>
                    <FormGroup row>
                    <Label for="exampleFname">Enter First Name : </Label>
                    <Col sm={12}>
                    <Input type="text" name="fname" id="exampleFname"  placeholder="" onChange={this.handleChange}/>
                    <p class="text-danger">{this.state.errors.fnameerror}</p>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Label for="exampleLname">Enter Last Name : </Label>
                    <Col sm={12}>
                    <Input type="text" name="lname" id="exampleFname"  placeholder="" onChange={this.handleChange}/>
                    <p class="text-danger">{this.state.errors.lnameerror}</p>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Label for="exampleEmail">Enter Email ID : </Label>
                    <Col sm={12}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="abc@domain.com" onChange={this.handleChange}/>
                    <p class="text-danger">{this.state.errors.emailerror}</p>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Label for="exampleAddress">Enter Address : </Label>
                    <Col sm={12}>
                    <Input type="text" name="address" id="exampleAddress" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Label for="exampleGender">Enter Gender:</Label>
                    <Col sm={12}>
                    <Input type="select" name="gender" onChange={this.handleChange}>
                        <option hidden value="">Select any one</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </Input>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Label for="exampleContactno">Enter Contact Number : </Label>
                    <Col sm={12}>
                        <Input type="text" name="contactno" className="form-control" id="contactno" onChange={this.handleChange}/>
                        <p class="text-danger">{this.state.errors.contacterror}</p>  
                    </Col>
                </FormGroup>
                <br/>
            <FormGroup row>
                <Label for="exampleAdharno">Enter Aadhar Number : </Label>
                <Col sm={12}>
                <Input type="text" name="adharno" className="form-control" id="adharno" onChange={this.handleChange}/>
                <p class="text-danger"> {this.state.errors.adharerror} </p>
                </Col>
            </FormGroup>
            <FormGroup check row>
                <center>
                <Col >
                    <Button disabled={!this.state.formvalid} class="btn btn-success w-100" color="success" onClick={this.submitData}>REGISTER</Button> &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="reset" class="btn btn-danger"color="danger">Reset</Button>
                    <br/>
                    <ToastContainer position="top-center"autoClose={8000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </Col>
                <br/>
                <br/>
                </center>
            </FormGroup>
            </Form>
     </div>
     </div>
     </div>
  );
}
}
export default Oregistration;