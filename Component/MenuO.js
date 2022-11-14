import React from "react";
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

//const MenuO = (props) => {
  class MenuO extends React.Component{
    logout = () => {
      if(window.confirm("Are you sure?")){
      window.localStorage.clear();
      window.location.href ="http://localhost:3000/";
      }
      else
      {
        window.location.href = "http://localhost:3000/ownerhome";
      }
    }
    render(){
    return (
      <div id="adminhome"> 
      <ListGroup style={{textAlign: 'center'}} >
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/greet" action><b>Home</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/profileo" action><b>Profile</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/addveh" action><b>Add Vehicles</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="a" to="/getvehbyoid" action><b>Vehicle Details</b></Link>
          <Link className='list-group-item list-group-item-action' style={{padding: '16.9px'}} tag="button"onClick={this.logout} action><b>Logout</b></Link>
         
      </ListGroup>
      </div>
    );
    }
  }
  
  export default MenuO;