import Footer from "./Footer";

import React from "react";
import Ownerprofile from "./Ownerprofile";

import NavbarHomeLogout from "./NavbarHomeLogout";

class Ownerhome extends React.Component{
    render(){
        return(
            <div style={{height: '100%', width: '100%'}}>
                <div style={{position: 'absolute', top: '0px', left: '0px', height: '80px', right: '0px', overflow: 'hidden'}}>
                    <NavbarHomeLogout />
                </div>
                <div id="ownerhome" style={{position: 'absolute', top: '80px', bottom: '120px', left: '0px', right: '0px', overflowY: 'scroll'}}>
                    <Ownerprofile />
                <div id="footer2">
                    <Footer />
                </div>
            </div>
            </div>
        );
    }
     

}
export default Ownerhome;