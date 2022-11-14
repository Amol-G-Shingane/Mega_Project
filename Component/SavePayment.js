import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SavePayment extends React.Component {
    constructor(props)
  {
    const myCurrentDate = new Date();
    const date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();

    super(props)
    this.state={
      bid:"",
      cid:"",
      tamt:"",
      mode:"",
      datetime:"",
      payment:{}
    }
  }
  handleChange= (e) => {
    if(this.state.bid=="")
    {
    this.setState({["bid"]:JSON.parse(localStorage.getItem("Bookingdetails")).bid});
    this.setState({["cid"]:JSON.parse(localStorage.getItem("loggedinuser")).cid});
    this.setState({["tamt"]:localStorage.getItem("totalamount")});
    }
    const nm=e.target.name;
    const val=e.target.value;
    this.setState({[nm]:val});
    console.log(nm);
    console.log(val);
    if(e.target.name==="mode")
    {
      const nm1="datetime";
      const myCurrentDate = new Date();
      const date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();

      console.log(JSON.parse(localStorage.getItem("Bookedvehicle")).vid);
      e.preventDefault();
      this.setState({[nm1]:date});
    }
  }
  submitData=(e) => {
    const reqOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        bid:this.state.bid,
        cid:this.state.cid,
        tamt:this.state.tamt,
        mode:this.state.mode,
        datetime:this.state.datetime
      })
    }
    fetch("http://localhost:8080/savepayment",reqOptions)
    .then(resp=>resp.json())
    .then(data=>{ 
        const json=JSON.parse(JSON.stringify(data));
        this.setState({payment:data});
        localStorage.setItem("Paymentdetails",JSON.stringify(this.state.payment));
        window.location.href="http://localhost:3000/customerhome";
    })
    toast.success('🥳 Payment Successfull!', {position: "top-center", autoClose: 8000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });  }
  render(props){
    const length=this.state.tamt.length;
    let comp;
    if(length!=0)
    {
      comp=<p>Total Amount = {localStorage.getItem("totalamount")}</p> 
    }
  return (
    <div  id="paymentbg">
      <br/><br/>
      <br/><br/>
      <div class="row justify-content-around">
            <div class="col-md-7 bg-light shadow px-4 pt-4" id="div2">
                <h4 class="display-4">
                <i class="fa fa-user-plus" aria-hidden="true"></i> Payment Details</h4>
                <p class="text-secondary">Enter valid Payment details.</p>
                <hr/>
    <Form>
        <h3>Payment Details :</h3>
        {comp}
        <FormGroup row>
                      <Label sm={2}>Enter Mode Of Payment :</Label>
                      <Col sm={10}>
                          <Input type="select" name="mode" onChange={this.handleChange}>
                            <option hidden value="">Select any one</option>
                            <option value="GPay">Google pay</option>
                            <option value="upi">UPI</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                          </Input>
                      </Col>
                    </FormGroup>
      <FormGroup check row>
        <Col >
        <center>
          <br/>
          <Button color="primary" onClick={this.submitData}>Pay</Button> &nbsp;
          <Button type="reset" class="btn btn-danger"color="danger">Reset</Button>
          <ToastContainer position="top-center"autoClose={8000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        
          </center></Col>
      </FormGroup>
      <br/>
    </Form>
    
    </div>
    </div>
    <br/><br/>
    <br/><br/>
    <br/><br/>
    <br/><br/>
    <br/><br/>
    <br/><br/>
    <br/>
    
    
    </div>
    
  );
    }
}
export default SavePayment;