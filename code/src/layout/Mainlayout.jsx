import { Outlet } from "react-router-dom";
import Slider from "../Components/Slider/Slider";

export const MainLayout = () => {
  return (
    <main>
      <Slider />
      <Outlet />
    </main>
  );
};
