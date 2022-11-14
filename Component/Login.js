import React  from 'react';
import { Col, Button, Form, FormGroup, Label } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            uname:"",
            pwd:"",
            customer:{},
            owner:{},
            loginerror:"",
            //uname: "",
            //pwd: "",
            errors: {
                emailerror:"",
                pwderror:""
            },
            emailvalid: false,
            pwdvalid: false,
            formvalid: false
        }
    }

    

    handleChange = (e) =>{
        const userPattern = /^[a-zA-Z0-9].{2,10}$/
        const pwdPattern = /^[A-Za-z0-9@].{5,10}$/
        const input = e.target;
        const nm = input.name;
        const val = input.value;
        let errors = this.state.errors;
        let emailflag = this.state.emailvalid;
        let pwdflag = this.state.pwdvalid;
        switch(nm)
        {
            case 'uname':
                if(!userPattern.test(val))
                {
                    errors.emailerror = "Invalid username...";
                    emailflag = false;
                }
                else
                {
                    errors.emailerror ="";
                    emailflag = true;
                }    
                break;
            case 'pwd':
                if(!pwdPattern.test(val))
                {
                    errors.pwderror = "Invalid pwd...";
                    pwdflag = false;
                }
                else
                {
                    errors.pwderror ="";
                    pwdflag = true;
                }
                break;
        } 
        this.setState({errors,emailvalid: emailflag, pwdvalid: pwdflag}, ()=>{this.setState({formvalid: this.state.emailvalid && this.state.pwdvalid} )})
        this.setState({[nm]:val});
    }

    submitData = (e) => {
        e.preventDefault();
    const reqOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        uname:this.state.uname,
        pwd:this.state.pwd,
      })
    }
    fetch("http://localhost:8080/checklogin",reqOptions)
    .then(resp=>resp.text())
    .then(data=> {if(data.length!=0)
    {
      const json=JSON.parse(data);
      console.log(json.loginid.role);
      if(json.loginid.role=="customer") //check once sprignboot part done
      {
        this.setState({customer:json});
        localStorage.setItem("loggedinuser",JSON.stringify(this.state.customer));
        window.location.href = "/customerhome";
        //this.props.history.push("/customerhome");
      }
      else if(json.loginid.role=="owner")
      {
        this.setState({owner:json});
        localStorage.setItem("loggedinuser",JSON.stringify(this.state.owner));
        window.location.href = "/ownerhome";
      }
      else
      {
        this.setState({admin:json});
        localStorage.setItem("loggedinuser",JSON.stringify(this.state.admin));
        window.location.href = "/adminhome";
      }
      //localStorage.setItem("loggedinuser",JSON.stringify(this.state.customer)); //sessionstorage check once springboot done
      //sessionStorage
     // mystore.dispatch({type:"LOGGEDIN"});
      //this.props.history.push("/Customerhome");
    }
    else
    {
      this.setState({loginerror:"WrongID/pwd"});
    }
  })
  toast.success('🚗 Login In Progress!', {position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
    }

  render(props){
    

    return (
      <div class="container-fluid my-5" id="div2">
          
            <div class="row justify-content-around">
                <div class="col-md-4 bg-light shadow px-4 pt-4">
                <center>
                    <h4 class="display-5 "style={{fontFamily: 'Rockwell'}}>
                      
                    <i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</h4>
                    
                    <p class="text-primary">Enter valid Login details.</p>
                    </center>
                    <hr/>
                    
                    <Form>
                    <FormGroup row>
                        <Label for="uname" sm={10}>Enter User ID : </Label>
                        <Col sm={10}>
                            <input type="text" id="uname" className="form-control" name="uname" value={this.state.uname} onChange={this.handleChange} />
                            <p class="text-danger">{this.state.errors.emailerror}</p>
                        </Col>
                    </FormGroup>
                    <br />
                    <FormGroup row>
                        <Label for="pwd" sm={10}>Enter Password: </Label>
                        <Col sm={10}>
                            <input type="password" id="pwd" className="form-control" name="pwd" value={this.state.pwd} onChange={this.handleChange} />
                            <p class="text-danger">{this.state.errors.pwderror}</p>
                        </Col>
                        
                    </FormGroup>
                    <br />
                    
                    <FormGroup check row>
                    
                        <Col  >
                          <center>
                            <Button disabled={!this.state.formvalid} onClick={this.submitData} class="btn btn-success w-100" color="primary">LOGIN</Button> &nbsp;
                            
                            <Button type="reset" class="btn btn-danger"color="danger" id="div3">Reset</Button>
                            <br/>
                            <ToastContainer position="top-center"autoClose={8000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                            </center>
                        </Col>
                        <br/>
                    </FormGroup>
                    
                </Form>
            </div>
        </div>

    </div>
       
  );
}
}
export default Login;