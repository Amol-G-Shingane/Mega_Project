
import React from "react";
import About from "./About";
import NavbarHome from "./NavbarHome";


class AboutHome extends React.Component{
    render(){
        return(
            <div >                
                <NavbarHome />                
                <About />              
            </div>
        );
    }
}
export default AboutHome;