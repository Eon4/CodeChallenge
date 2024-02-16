
import './App.css'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Details } from "./pages/Details";
import { Products } from "./pages/Products";
import { Router } from './Components/Router/Router';
import { useState } from 'react'
import './App.css'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Details } from "./pages/Details";
import { Products } from "./pages/Products";
import { Router } from './Components/Router/Router';
import { Modal } from './Components/Modal/Modal'
import { Accordion } from './Components/Accordion/Accordion';
import { CookieBanner } from './Components/CookieBanner/CookieBanner';
import Slider from './Components/Slider/Slider'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const routeArr = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/products/:product/:id',
      element: <Details />,
    },
  ];

  return (
    <>
      <Router routes={routeArr} />
      <button onClick={handleModal}>Open</button>
      <Modal isModalOpen={isModalOpen} handleModal={handleModal} title="Overskrift">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa corrupti exercitationem ad neque asperiores rem?</p>
      </Modal>
      <Accordion title="Accordion 1">
        <h3>Lorem, ipsum.</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim in molestias nemo fuga hic rem, doloribus praesentium vel explicabo error incidunt beatae placeat esse, id sit eos recusandae molestiae asperiores?</p>
      </Accordion>
      <CookieBanner />
                  <Route path="/Slider" element={<Slider />} />
    </>
  );
}
export default App;