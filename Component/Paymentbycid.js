import React from "react";

class Paymentbycid extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            payment:[]
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
   
    render(){
        return(
                <div>
                <table className="table table-striped" id="table">
            <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Total Amount</th>
                        <th>Payment Mode</th>
                        <th>Transaction Date and Time</th>
                        
                    </tr>
                </thead>
                {this.state.payment.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr >
                        <td id="table">{JSON.parse(localStorage.getItem("loggedinuser")).loginid.uname}</td>
                        <td id="table">{obj.tamt}</td>
                        <td id="table">{obj.mode}</td>
                        <td id="table">{obj.datetime}</td>
                        {/*<td id="table">{obj.tid}</td>*/}
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
export default Paymentbycid;