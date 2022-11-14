import React from 'react';
import Footer from './Footer';

import Login from './Login';
import NavbarHome from './NavbarHome';

class LoginPage extends React.Component{
    render(){
        return(
            <div id="div1" >
                <div id="loginbg">
                <NavbarHome />
                
                <Login />
                <div id="footer">
                <Footer />
                </div>
            </div>
            </div>
        );
    }
     

}
export default LoginPage;