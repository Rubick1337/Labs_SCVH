import React from 'react';
import { Carousel } from 'react-bootstrap';
import ocean from '../../images/alada.png'

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: 'auto' }}>
        <img
          className="d-block w-100"
          src={ocean}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Web Developer Blog</h3>
          <p>Do do nostrud est aliqua.</p>
        </Carousel.Caption>
      </Carousel.Item>

    
      <Carousel.Item style={{  height: 'auto'  }}>
        <img
          className="d-block w-100"
          src={ocean}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Learn Programming</h3>
          <p>Ut labore et dolore magna aliqua.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: 'auto' }}>
        <img
          className="d-block w-100"
          src={ocean}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Explore Web Technologies</h3>
          <p>Excepteur sint occaecat cupidatat non proident.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
