import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';


class MenuA extends React.Component{
  logout = () => {
    if(window.confirm("Are you sure?")){
    window.localStorage.clear();
    window.location.href ="http://localhost:3000/";
    }
    else
    {
      window.location.href="http://localhost:3000/adminhome";
    }
  }
  render(){
    return (
      <div id="adminhome"> 
      <ListGroup style={{textAlign: 'center'}} >
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/greeta" action><b>Home</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/getcustomer" action><b>Customer Details</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/getowner" action><b>Owner Details</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/getveh" action><b>Vehicle Details</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/getbooking" action><b>Booking Details</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/getpay" action><b>Payment Details</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="button" onClick={this.logout} to="/" action><b>Logout</b></Link>
        
      </ListGroup>
      </div>
    );
    }
}

export default MenuA;