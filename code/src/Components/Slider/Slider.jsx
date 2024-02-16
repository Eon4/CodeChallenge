import { useEffect, useState } from "react";
import style from "./Slider.module.scss";

const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

const Slider = () => {
  const [images, setImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (!PIXABAY_API_KEY) {
          console.error("Pixabay API key is not defined.");
          return;
        }

        const response = await fetch(
          `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch images. Status: ${response.status}`);
        }

        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error('Error fetching images:', error);
    }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images) {
      const intervalId = setInterval(() => {
        setFade(true);

        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );

          setFade(false);
        }, 1000);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [images]);

  return (
    images ? (
      <div className={style.sliderContainer}>
        <div
          className={`${style.sliderImage} ${fade ? style.fade : ""}`}
          style={{
            backgroundImage: `url(${images[currentImageIndex]?.webformatURL})`,
          }}
        />
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
};

export default Slider;


