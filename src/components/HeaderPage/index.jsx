import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importe os estilos do carousel
import styles from './styles.module.scss';

export const HeaderPage = ({ subtitle, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(533);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const newHeight = windowHeight >= 768 ? 533 : windowHeight * 0.6;

      setCarouselHeight(newHeight);
      setCurrentSlide(0);
    };

    const handleLoad = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const newHeight = windowHeight >= 768 ? 533 : windowHeight * 0.6;

      setCarouselHeight(newHeight);
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <section className={styles.headerPage}>
      <Carousel
        ref={carouselRef}
        className={styles.carousel}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        afterChange={(slideIndex) => setCurrentSlide(slideIndex)}
        selectedItem={currentSlide}
        style={{ maxHeight: carouselHeight, overflow: 'hidden' }}
      >
        <div className={styles.carouselImageWrapper}>
          <img
            srcSet="images/background-1.jpg"
            sizes={`${carouselHeight}px`}
            className={styles.carouselImage}
            alt="Carousel Image 1"
          />
        </div>

        <div className={styles.carouselImageWrapper}>
          <img
            srcSet="images/background-2.jpg"
            sizes={`${carouselHeight}px`}
            className={styles.carouselImage}
            alt="Carousel Image 2"
          />
        </div>

        <div className={styles.carouselImageWrapper}>
          <img
            srcSet="images/background-3.jpg"
            sizes={`${carouselHeight}px`}
            className={styles.carouselImage}
            alt="Carousel Image 3"
          />
        </div>
      </Carousel>
      <div className={styles.barraVerde}>
        <p>CONHEÇA NOSSO CATÁLOGO DE CURSOS EAD</p>
      </div>
    </section>
  );
};
