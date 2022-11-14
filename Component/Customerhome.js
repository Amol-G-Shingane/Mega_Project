import React from 'react';
import Customerprofile from './Customerprofile';
import Footer from './Footer';

import NavbarHomeLogout from './NavbarHomeLogout';

class Customerhome extends React.Component{
    render(){
        return(
            <div style={{height: '100%', width: '100%'}}>
            <div style={{position: 'absolute', top: '0px', left: '0px', height: '80px', right: '0px', overflow: 'hidden'}}>
                    <NavbarHomeLogout />
                    </div>
                     <div id="customerhome" style={{position: 'absolute', top: '80px', bottom: '200px', left: '0px', right: '0px', overflowY: 'scroll'}}>
                    <Customerprofile />
                    <div id="footer2">
                    <Footer />
                    </div>
                    </div>
                    
                    </div>

                    

        );
    }
     

}
export default Customerhome;