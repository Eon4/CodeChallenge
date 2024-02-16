import React, { useEffect, useState } from "react";
import style from "./Slider.module.scss";  
import image1 from "../../assets/img/flowers.jpg";
import image2 from "../../assets/img/mountains.jpg";
import image3 from "../../assets/img/bird.jpg";
import image4 from "../../assets/img/pink.jpg";
import image5 from "../../assets/img/avenue.jpg";

// Defining the Slider component
const Slider = () => {
  // Array containing image paths
  const images = [image1, image2, image3, image4, image5];

  // State to keep track of the current image index and fade effect
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Function to navigate to the previous image
  const goToPreviousImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 1000);
  };

  // Function to navigate to the next image
  const goToNextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 1000);
  };

  // Effect to automatically advance to the next image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false);
      }, 1000);
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images]);

  // Render the Slider component with navigation buttons and image
  return (
    <div className={style.sliderContainer}>
      <button className={style.navigationButton} onClick={goToPreviousImage}>
        {"<"}
      </button>
      {/* Image container with fade effect */}
      <div
        className={`${style.sliderImage} ${fade ? style.fade : ""}`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      />
      <button className={style.navigationButtonRight} onClick={goToNextImage}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;

