
import React from "react";

import Footer from "./Footer";
import Gallery from "./Gallery";

import Home from "./Home";
import NavbarHome from "./NavbarHome";
import Service from "./Service";

class HomePage extends React.Component{
    render(){
        return(
            <div id="homebg">
                
                <NavbarHome />
                <Home />
                <Service />
                <Gallery />
                
                <Footer />

                
            </div>

        );
    }
     

}
export default HomePage;
