import { useState } from "react";
import classes from "./ImageGallery.module.css";

const ImageGallery = ({ images, title }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== images.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length - 1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(images.length - 1);
    }
  };

  return (
    <div className={classes.imgCtn}>
      <div className={classes.selected}>
        <button onClick={prevSlide}>&#10094;</button>
        <img
          src={images[slideIndex]}
          alt={title}
        />
        <button onClick={nextSlide}>&#10095;</button>
      </div>
      <div className={classes.imgGallery}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={title}
            className={slideIndex === index ? classes.active : ""}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
