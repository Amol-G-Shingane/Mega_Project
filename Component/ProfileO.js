import React from "react";

class ProfileO extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            owner:[]
        }
    }
    componentDidMount=()=>{
        fetch('http://localhost:8080/getownerbyoid/'+JSON.parse(localStorage.getItem("loggedinuser")).oid,
        {
            method:'GET',
            headers:{
                'Content_Type':'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data=>{this.setState({owner:data});
    });
    }
    /*deleteData=(vid)=>{
        alert(vid);
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
        }
    }*/
    render(){
        return(
            <div>
            <table className="table table-striped" id="table2">
            <thead>
                    <tr>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>last Name</th>
                        <th>Email ID</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Contact No</th>
                        <th>Adhar No</th>
                    </tr>
                </thead>
                {this.state.owner.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr id="table2">
                        <td>{JSON.parse(localStorage.getItem("loggedinuser")).loginid.uname}</td>
                        <td>{obj.fname}</td>
                        <td>{obj.lname}</td>
                        <td>{obj.email}</td>
                        <td>{obj.address}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.contactno}</td>
                        <td>{obj.adharno}</td>
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
export default ProfileO;