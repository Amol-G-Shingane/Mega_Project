import React from "react";

class Bookingbycid extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            booking:[]
        }
    }
    componentDidMount= () => {
        //alert('http://localhost:8080/getpaybycid/'+JSON.parse(localStorage.getItem("loggedinuser")).cid)
        fetch('http://localhost:8080/getpaycid/'+JSON.parse(localStorage.getItem("loggedinuser")).cid,
        {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data=>{this.setState({payment:data})
        //.catch(err=>alert("err"));
        
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
       /* const length=this.state.payment.length;

        let comp;
        if(length===0)
        {
            comp=<p>Transaction is not done yet.........</p>
        }
        else{
            comp=<div>
                <table className="table table-striped">
            <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Total Amount</th>
                        <th>Payment Mode</th>
                        <th>Transaction Time</th>
                        <th>Transaction ID</th>
                    </tr>
                </thead>
                {this.state.payment.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr>
                        <td>{JSON.parse(localStorage.getItem("loggedinuser")).loginid.uname}</td>
                        <td>{obj.tamt}</td>
                        <td>{obj.mode}</td>
                        <td>{obj.datetime}</td>
                        <td>{obj.tid}</td>
                       {/* <td><Button onClick={this.deleteData(obj.cid)}>Update</Button></td>
                        </tr>
                        </tbody>
                        )
                    }
                )
        }
            </table>
            </div>
        }*/
        return(
                <div>
                <table className="table table-striped">
            <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Total Amount</th>
                        <th>Payment Mode</th>
                        <th>Transaction Time</th>
                        <th>Transaction ID</th>
                    </tr>
                </thead>
                {this.state.payment.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr>
                        <td>{JSON.parse(localStorage.getItem("loggedinuser")).loginid.uname}</td>
                        <td>{obj.tamt}</td>
                        <td>{obj.mode}</td>
                        <td>{obj.datetime}</td>
                        <td>{obj.tid}</td>
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
export default Bookingbycid;