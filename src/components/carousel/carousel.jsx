import React, { useState } from 'react';

export const Carousel = ({ children, slideInterval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [children.length, slideInterval]);

  return (
    <div className="relative">
      {React.Children.map(children, (child, index) => (
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
