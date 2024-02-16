import { Outlet } from "react-router-dom";
import { useState } from "react";
import Slider from "../Components/Slider/Slider";
import Loader from '../Components/Loader/loader';

export const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  const handleSliderReady = () => {
    setLoading(false);
  };

  return (
    <main>
      {loading && <Loader />}
      <Slider onSliderReady={handleSliderReady} />
      <Outlet />
    </main>
  );
};
