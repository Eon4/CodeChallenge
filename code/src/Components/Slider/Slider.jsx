import { useEffect, useState } from "react";
import style from "./Slider.module.scss";
import image1 from "../../assets/img/flowers.jpg";
import image2 from "../../assets/img/mountains.jpg";
import image3 from "../../assets/img/bird.jpg";
import image4 from "../../assets/img/pink.jpg";
import image5 from "../../assets/img/avenue.jpg";


const Slider = ({ onSliderReady }) => {
  const images = [image1, image2, image3, image4, image5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [sliderReady, setSliderReady] = useState(false);

  const goToPreviousImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 1000);
  };

  const goToNextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 1000);
  };

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setSliderReady(true);
      onSliderReady(); // Notify the parent component that the slider is ready
    }, 3000); // Show loader for at least 3 seconds

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(loaderTimeout);
  }, [onSliderReady]);

  useEffect(() => {
    if (sliderReady) {
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
    }
  }, [images, sliderReady]);

  return (
    <div className={style.sliderContainer}>
      <button className={style.navigationButton} onClick={goToPreviousImage}>
        {"<"}
      </button>
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
