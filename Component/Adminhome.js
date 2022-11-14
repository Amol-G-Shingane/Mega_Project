import React from 'react';
import Adminprofile from './Adminprofile';
import Footer from './Footer';

import NavbarHomeLogout from './NavbarHomeLogout';

class Adminhome extends React.Component{
    render(){
        return(
            <div  style={{height: '100%', width: '100%'}} >
                <div style={{position: 'absolute', top: '0px', left: '0px', height: '80px', right: '0px', overflow: 'hidden'}}>
                    <NavbarHomeLogout />
                </div>
                <div id="admin" style={{position: 'absolute', top: '80px', bottom: '100px', left: '0px', right: '0px', overflowY: 'scroll'}}>
                    <Adminprofile />
                <div id="footer2">
                    <Footer />
                </div>
            </div>
            </div>

        );
    }
     

}
export default Adminhome;