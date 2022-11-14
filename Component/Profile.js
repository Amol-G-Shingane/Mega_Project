import React from "react";

class Profile extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            customer:[]
        }
    }
    componentDidMount=()=>{
        fetch('http://localhost:8080/getcustomerbyid/'+JSON.parse(localStorage.getItem("loggedinuser")).cid,
        {
            method:'GET',
            headers:{
                'Content_Type':'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data=>{this.setState({customer:data});
    });
    }
    render(){
        return(
            <div>
            <table className="table table-striped" id="table">
            <thead>
                    <tr>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>last Name</th>
                        <th>Email ID</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Contact No</th>
                        <th>Licence No</th>
                        <th>Update</th>
                    </tr>
                </thead>
                {this.state.customer.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr >
                        <td id="table">{JSON.parse(localStorage.getItem("loggedinuser")).loginid.uname}</td>
                        <td id="table">{obj.fname}</td>
                        <td id="table">{obj.lname}</td>
                        <td id="table">{obj.email}</td>
                        <td id="table">{obj.address}</td>
                        <td id="table">{obj.gender}</td>
                        <td id="table">{obj.contactno}</td>
                        <td id="table">{obj.licenceno}</td> 
                        <td>
                        <a href="/update">
            <button type="button" class="btn btn-primary" >update</button></a> </td>               
                       {/* <td><Button onClick={this.deleteData(obj.cid)}>Update</Button></td>*/}
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
export default Profile;