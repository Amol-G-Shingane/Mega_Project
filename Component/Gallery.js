import React from "react";


class Gallery extends React.Component {

    render(props) {
        const boxCStyle = { display: 'flex', flexwrap: 'wrap', gap: '1rem' }
        const boxStyle = { overflow: 'hidden', boxshadow: '1rem 1rem 2rem rgba(0,0,0,.1)', flex: '1 1 30rem', height: '25rem', position: 'relative' }
        const imgStyle = { height: '100%', width: '105%', objectfit: 'cover' }
        const spanStyle = { fontsize: '3.5rem', background: 'white', color: 'var(--orange)', borderradius: '.5rem', padding: '.2rem .2rem' }

        return (
            <div>
                <h1 class="heading" className="text-center text-md-right" style={{ padding: '2.5rem 0' }} id="gallery">
                    <span style={spanStyle}>G</span> &nbsp;
                    <span style={spanStyle}>A</span> &nbsp;
                    <span style={spanStyle}>L</span> &nbsp;
                    <span style={spanStyle}>L</span> &nbsp;
                    <span style={spanStyle}>E</span> &nbsp;
                    <span style={spanStyle}>R</span> &nbsp;
                    <span style={spanStyle}>Y</span>
                </h1>
                <ul>
                    <div class="box-container" style={boxCStyle} >
                        <li style={{ listStyle: 'none' }}>
                            <div class="box" style={boxStyle} id="photu">
                                <img src="/img/index1.jpg" alt="" style={imgStyle} />
                            </div>
                            <br/>
                            <div class="box1" style={boxCStyle}>
                                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hyundai I20 &nbsp;&nbsp;&nbsp; Model : 2017 &nbsp;&nbsp;&nbsp;&nbsp;Milage : 20 kmpl</h4>&nbsp;&nbsp;&nbsp;&nbsp;
                               
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  
</div>


                            </div>
                            <br />
                            <div class="box" hover style={boxStyle} >
                                <img src="/img/index2.png" alt="" style={imgStyle} />
                            </div>
                            <br/>
                            <div class="box1" style={boxCStyle} >
                                <h4>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yamaha R15 &nbsp;&nbsp;&nbsp; Model : 2020 &nbsp;&nbsp;&nbsp;Milage : 40kmpl</h4>&nbsp;&nbsp;&nbsp;
                                
                            </div>
                            <br />
                            <div class="box" hover style={boxStyle}>
                                <img src="/img/index3.jpg" alt="" style={imgStyle} />
                            </div>
                            <br/>
                            <div class="box1" style={boxCStyle}>
                                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Maruti Suzuki Celerio&nbsp;&nbsp;&nbsp;Model : 2021 &nbsp;&nbsp;&nbsp;&nbsp;Milage : 20kmpl</h4>&nbsp;&nbsp;&nbsp;&nbsp;
                                
                            </div>
                            <br />
                            <div class="box" hover style={boxStyle}>
                                <img src="/img/index8.webp" alt="" style={imgStyle} />
                            </div>
                            <br/>
                            <div class="box1" style={boxCStyle}>
                                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pulsar and Unicorn &nbsp;&nbsp;&nbsp;Model : 2019  &nbsp;&nbsp;&nbsp;&nbsp;Milage : 70kmpl</h4>&nbsp;&nbsp;&nbsp;&nbsp;
                                
                            </div>

                        </li>
                        <br />
                        <li style={{ listStyle: 'none' }}>
                            <div class="box" hover style={boxStyle}>
                                <img src="/img/index4.png" alt="" style={imgStyle} />
                            </div>
                            <br/>
                            <div class="box1" style={boxCStyle}>
                                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BMW Aprillia &nbsp;&nbsp;&nbsp;Model : 2020 &nbsp;&nbsp;&nbsp;&nbsp;Milage : 40kmpl</h4>&nbsp;&nbsp;&nbsp;&nbsp;
                                
                            </div>
                            <br />
                            <div class="box" hover style={boxStyle}>
                                <img src="/img/index5.jpg" alt="" style={imgStyle} />
                            </div>
                            <br/>
                            <div class="box1" style={boxCStyle}>
                                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Toyota Corolla Altis &nbsp;&nbsp;&nbsp;&nbsp;Model : 2022 &nbsp;&nbsp;&nbsp;&nbsp;Milage : 20kmpl</h4>&nbsp;&nbsp;&nbsp;&nbsp;
                                
                            </div>
                            <br />
                            <div class="box" style={boxStyle} >
                                <img src="/img/index6.png" alt="" style={imgStyle} />
                            </div>
                            <br/>
                            <div class="box1" style={boxCStyle} id="">
                                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Honda Hornet &nbsp;&nbsp;&nbsp;&nbsp;Model : 2016 &nbsp;&nbsp;&nbsp;&nbsp;Milage : 60kmpl</h4>&nbsp;&nbsp;&nbsp;
                                
                            </div>
                            <br />
                            <div class="box"  style={boxStyle} >
                                <img src="/img/index7.jpg" alt="" style={imgStyle} />
                            </div>
                            <br/>
                            <div class="box1" style={boxCStyle}>
                                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Maruti Suzuki Ciaz  &nbsp;&nbsp;&nbsp;Model : 2018 &nbsp;&nbsp;&nbsp;&nbsp;Milage : 20kmpl</h4>&nbsp;&nbsp;&nbsp;
                                
                            </div>
                        </li>
                    </div>
                </ul>
                <h1 class="heading" className="text-center text-md-right" style={{ padding: '2.5rem 0' }} id="gallery">
                    <span style={spanStyle}>L</span> &nbsp;
                    <span style={spanStyle}>O</span> &nbsp;
                    <span style={spanStyle}>C</span> &nbsp;
                    <span style={spanStyle}>A</span> &nbsp;
                    <span style={spanStyle}>T</span> &nbsp;
                    <span style={spanStyle}>I</span> &nbsp;
                    <span style={spanStyle}>O</span> &nbsp;
                    <span style={spanStyle}>N</span>
                </h1>

                <div class="map" id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8678264322675!2d73.80869341481352!3d18.
                534874087400684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x48c508ccaa4ef9a!2sCentre%
                20For%20Development%20Of%20Advanced%20Computing%2C%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1663925779428!5m2!1sen!2sin"
                        width="1518" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


                </div>
            </div>

        );

    }
}

export default Gallery;
