import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const HeaderPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: 500,
          marginTop: 145,
          marginRight: 5,
          backgroundColor: 'gray',
          borderRadius: 5,
        }}
      >
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000}>
          <div>
            <img src="images/background-1.jpg" alt="Carousel Image 1" />
          </div>
          <div>
            <img src="images/background-2.jpg" alt="Carousel Image 2" />
          </div>
          <div>
            <img src="images/background-3.jpg" alt="Carousel Image 3" />
          </div>
        </Carousel>
      </div>
      <div
        style={{
          width: 500,
          textAlign: 'center',
          backgroundColor: 'green',
          marginTop: 145,
          borderRadius: 5,
        }}
      >
        <p>Placeholder</p>
      </div>
    </div>
  );
};
