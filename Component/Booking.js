import React from "react";

function Booking(){
    return(
        <div>
            <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                            <img src="/img/b.jpeg" class="card-img-top" alt="Image of Swift Car"/>
                                <h5 class="card-title">BMW G 310 R</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Book Vehicle</a>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                            <img src="/img/a.jpeg" class="card-img-top" alt="Image of sports bike"/>
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Book Vehicle</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                            <img src="/img/e.jpeg" class="card-img-top" alt="Image of Swift Car"/>
                                <h4 class="card-title">Sports Car</h4>
                                <h5 class="card-title">Pune</h5>
                                <p class="card-text">Drop the gear and disappear.</p>
                                <a href="#" class="btn btn-primary">Book Vehicle</a>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Booking;