import React from "react";
import { RiMotorbikeFill, RiCarFill } from 'react-icons/ri';

class Service extends React.Component{
    render(props){
      const spanStyle = {fontsize: '3.5rem', background:'white', color:'var(--orange)', borderradius: '.5rem', padding:'.2rem 1rem'}
        return(
          <div class="container pb-4">
          <h1 class="heading" className="text-center text-md-right" style={{ padding:'2.5rem 0'}} id="service">
            <span style={spanStyle}>S</span> &nbsp;
            <span style={spanStyle}>E</span> &nbsp;
            <span style={spanStyle}>R</span> &nbsp;
            <span style={spanStyle}>V</span> &nbsp;
            <span style={spanStyle}>I</span> &nbsp;
            <span style={spanStyle}>C</span> &nbsp;
            <span style={spanStyle}>E</span> &nbsp;
            <span style={spanStyle}>S</span> &nbsp;
          </h1>
            <div class="container-fluid my-3" >
              <div class="row">
                  <div class="col-md-6">
                      <div class="card" >
                      <a href="/servicebike" id="serviceanchor">
                        <div className="text-center display-4 " style={{color: 'red'}}>
                          <RiMotorbikeFill />
                        </div>
                          <div class="card-body">
                              <h4 class="card-title" className="text-center">Bike</h4>
                              <p className="text-center">We provide car rental services</p>
                          </div>
                        </a>
                      </div>
                  </div>
                  <div class="col-md-6" >
                      <div class="card" >
                      <a href="/servicecar" id="serviceanchor">
                        <div className="text-center display-4 " style={{color: 'red'}}>
                          <RiCarFill />
                        </div>
                          <div class="card-body" >
                              <h4 class="card-title" className="text-center">Car</h4>
                              <p className="text-center">We provide bike rental services</p>
                          </div>
                          </a>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        );
    }
}
export default Service;