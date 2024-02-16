import React from 'react';
import { MainLayout } from './layout/Mainlayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from './Components/Slider/Slider'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            
          <Route path="/Slider" element={<Slider />} />
  
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;