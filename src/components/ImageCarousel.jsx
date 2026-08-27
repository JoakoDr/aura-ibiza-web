import { useState } from "react";

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <img src={images[current]} alt="" />

      <button onClick={prevSlide} className="carousel-btn left">
        ‹
      </button>

      <button onClick={nextSlide} className="carousel-btn right">
        ›
      </button>
    </div>
  );
}

export default ImageCarousel;