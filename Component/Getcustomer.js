
import React from "react";
import {Button} from 'reactstrap';
class Getcustomer extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            customer:[]
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getcustomer")
        .then(resp=>resp.json())
        .then(data=>{this.setState({customer:data});
        //alert(this.state.customer.length)
    });
    }
    deleteDataveh = (cid) => {
        if(window.confirm("Are you sure?")){
            fetch('http://localhost:8080/deletecust/'+cid,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'                     
                }
            })
            .then(console.log("Deleted"))
            .catch(err=>console.log("error"))
            this.setState({
                customer: this.state.customer.filter(customer => customer.cid !== cid)
            });
        }
    }
    render(){
        const length=this.state.customer.length;
        let comp;
        if(length==0)
        {
            comp=<h1 style={{fontFamily: 'Rockwell', textAlign: 'center',color: 'white'}}>Customer Details not found</h1>
        }
        else{
            comp=<div >
            <table className="table table-striped" id="table2">
            <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Contact Number</th>
                        <th>Licence Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {this.state.customer.map(
                    obj=>{
                        return(
                        <tbody >
                        <tr >
                        <td id="table2">{obj.cid}</td>
                        <td id="table2">{obj.fname}</td>
                        <td id="table2">{obj.lname}</td>
                        <td id="table2">{obj.email}</td>
                        <td id="table2">{obj.address}</td>
                        <td id="table2">{obj.gender}</td>
                        <td id="table2">{obj.contactno}</td>
                        <td id="table2">{obj.licenceno}</td>
                        <td><Button color="danger" onClick={()=>this.deleteDataveh(obj.cid)}>DELETE</Button></td>
                        </tr>
                        </tbody>
                            )
                        }
                     )

                }
            </table>
            </div>
        }
        return(
            <div>
                {comp}
            </div>
            
            )
    }
}
export default Getcustomer;