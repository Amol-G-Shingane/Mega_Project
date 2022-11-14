import React from 'react';
import Cregistration from './Cregistration';
import Footer from './Footer';
import Header from './Header';
import NavbarHome from './NavbarHome';

class Csignup extends React.Component{
    render(){
        return(
            <div >
                
                
                <NavbarHome />
                <div id="csignupbg">
                <Cregistration />
                <Footer />
            </div>
            </div>

        );
    }
     

}
export default Csignup;