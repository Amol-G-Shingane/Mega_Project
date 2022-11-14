import React from "react";
import {  Button} from 'reactstrap';

class Getvehicle extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            vehicle:[]
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getvehbyoid/"+JSON.parse(localStorage.getItem("loggedinuser")).oid,
        {
            method:'GET',
            headers:{
                'Content_Type':'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data=>{this.setState({vehicle:data});
        });
    }
    deleteDataveh = (vid) => {
        if(window.confirm("Are you sure?")){
            fetch('http://localhost:8080/deleteveh/'+vid,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'                     
                }
            })
            .then(console.log("Deleted"))
            .catch(err=>console.log("error"))
            this.setState({
                vehicle: this.state.vehicle.filter(vehicle => vehicle.vid !== vid)
            });
        }
    }
    render(){
        const length=this.state.vehicle.length;
        let comp;
        if(length==0)
        {
            comp=<h1 class="display-3" style={{fontFamily: 'Rockwell', padding:'3%', textAlign:'center', color: 'maroon'}}>Vehicle Not Found </h1>

        }
        else{
            comp=<div>
            <table class="table table-hover" id="table2">
            <thead>
                    <tr>
                        <th>Vehicle ID</th>
                        <th>Vehicle Number</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle Type</th>
                        <th>City</th>
                        <th>Category</th>
                        <th>Insurance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {this.state.vehicle.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr>
                        <td id="table2">{obj.vid}</td>
                        <td id="table2">{obj.vno}</td>
                        <td id="table2">{obj.vname}</td>
                        <td id="table2">{obj.vtype}</td>
                        <td id="table2">{obj.city}</td>
                        <td id="table2">{obj.category}</td>
                        <td id="table2">{obj.insurence}</td>
                        <td><Button color="danger" onClick={()=>this.deleteDataveh(obj.vid)}>DELETE</Button></td>
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
export default Getvehicle;