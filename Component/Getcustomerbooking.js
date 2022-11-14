import React from "react";

export default class Getcustomerbooking extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            booking:[]
        }
    }
    componentDidMount=()=>{
        fetch('http://localhost:8080/getbookingbycid/'+JSON.parse(localStorage.getItem("loggedinuser")).cid,
        {
            method:'GET',
            headers:{
                'Content_Type':'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data=>{this.setState({booking:data});
    
    });
    }
    render(){
        return(
            <div>
            <table className="table table-striped" id="table">
            <thead>
                    <tr>
                        <th>Booking number</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Destination from</th>
                        <th>Destination To</th>
                        <th>Booking Date and time</th>
                    </tr>
                </thead>
                {this.state.booking.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr id="table">
                        <td>RIG-2022{obj.bid}</td>
                        <td>{obj.fdate}</td>
                        <td>{obj.tdate}</td>
                        <td>{obj.destfrom}</td>
                        <td>{obj.destto}</td>
                        <td>{obj.datetime}</td>
                        </tr>
                        </tbody>
                        )
                    }
                )
        }
            </table>
            </div>
        )
    }
}