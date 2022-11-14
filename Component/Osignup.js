import React from 'react';
import Footer from './Footer';

import NavbarHome from './NavbarHome';
import Oregistration from './Oregistration';

class Osignup extends React.Component{
    render(){
        return(
            <div >               
                <NavbarHome />
                <div id="csignupbg">
                <Oregistration />
                <Footer />
            </div>
            </div>
        );
    }
     

}
export default Osignup;