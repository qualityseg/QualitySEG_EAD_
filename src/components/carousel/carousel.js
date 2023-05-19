import { useState } from 'react';
import styles from './carousel.module.scss';

export const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <img src={images[currentImageIndex]} alt="" />
      <button onClick={handlePrevImage}>Prev</button>
      <button onClick={handleNextImage}>Next</button>
    </div>
  );
};