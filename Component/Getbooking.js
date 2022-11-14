
import React from "react";
import {  Button} from 'reactstrap';


class Getbooking extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            booking:[]
        }
    }
    
 
    componentDidMount = () => {
        fetch("http://localhost:8080/getbooking")
        .then(resp=>resp.json())
        .then(data=>{this.setState({booking:data});
        });
    }
    deleteDataveh = (bid) => {
        if(window.confirm("Are you sure?")){
           /* axios.delete("http://localhost:8080/deletebook/"+bid)
            window.location.reload();*/
           fetch('http://localhost:8080/deletebook/'+bid,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'                     
                }
            })
            .then(console.log("Deleted"))
            .catch(err=>console.log("error"))
           this.setState({
               booking: this.state.booking.filter(booking => booking.bid !== bid)
           });
        }
    }
    render(){
        
        const length=this.state.booking.length;
        let comp;
        if(length==0)
        {
            comp=<h1 style={{fontFamily: 'Rockwell', textAlign: 'center',color: 'white'}}>Booking Details not found</h1>
        }
        else{
            comp=<div>
            <table className="table table-striped" id="table2">
            <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Date From</th>
                        <th>Date To</th>
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th>Booking Date and Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {this.state.booking.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr >
                        <td id="table2">{obj.bid}</td>
                        <td id="table2">{obj.fdate} </td>
                        <td id="table2">{obj.tdate} </td>
                        <td id="table2">{obj.destto}</td>
                        <td id="table2">{obj.destfrom}</td>
                        <td id="table2">{obj.datetime}</td>
                        <td><Button color="danger" onClick={()=>this.deleteDataveh(obj.bid)}>DELETE</Button></td>
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
export default Getbooking;