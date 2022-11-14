import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';


class Menu extends React.Component{
  logout = () => {
    if(window.confirm("Are you sure?")){
    window.localStorage.clear();
    window.location.href ="http://localhost:3000/";
    }
    else{
      window.location.href="http://localhost:3000/customerhome";
    }
  }
  render(){
    return (
      <div id="adminhome"> 
      <ListGroup style={{textAlign: 'center'}} >
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/greet" action><b>Home</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/searchveh" action><b>Search Vehicle</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/profile" action><b>Profile</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/getcustomerbooking" action><b>Booking</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/paymentbycid" action><b>Payment</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="button" onClick={this.logout} to="/" action><b>Logout</b></Link>
        
      </ListGroup>
      </div>
    );
    }
}

export default Menu;