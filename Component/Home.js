import React from "react";
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <div id="home" class="carousel slide" data-ride="carousel" data-interval="100">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/a.jpeg"
            alt="Bikes"
          />
          <Carousel.Caption>
            <h5>Bike</h5>
            <p><i>The best views are seen from inside the motorcycle helmet.</i></p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/b.jpeg"
            alt="Bikes"
          />
          <Carousel.Caption>
            <h5>Bike</h5>
            <p><i>The best views are seen from inside the motorcycle helmet.</i></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/c.jpeg"
            alt="Bikes"
          />
          <Carousel.Caption>
            <h5>Bike</h5>
            <p><i>The best views are seen from inside the motorcycle helmet.</i></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/d.jpeg"
            alt="Cars"
          />
          <Carousel.Caption>
            <h5>Cars</h5>
            <p><i>A Car for Every Purse and Purpose.</i></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/e.jpeg"
            alt="Sports Cars"
          />
          <Carousel.Caption>
            <h5>Sports Car</h5>
            <p><i>Drop a Gear & Disappear.</i></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Home;