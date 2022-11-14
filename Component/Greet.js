import React from 'react'
export default class Greet extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <h1 class="display-3" style={{fontFamily: 'Rockwell', padding:'3%', textAlign:'center', color: 'maroon'}}>Welcome {JSON.parse(localStorage.getItem("loggedinuser")).fname} </h1>
            </div>
            );
    }
}
                