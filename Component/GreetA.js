import React from 'react';

export default class GreetA extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <h1 class="display-1" style={{fontFamily: 'Rockwell', padding:'4%', textAlign: 'center',color: 'white'}}>Welcome Admin </h1>
            </div>
            )
    }
}
                