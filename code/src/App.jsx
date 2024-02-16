import { useState } from 'react'
import './App.css'
import { Modal } from './Components/Modal/Modal'
import { Accordion } from './Components/Accordion/Accordion';
import { CookieBanner } from './Components/CookieBanner/CookieBanner';

function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      
      <button onClick={handleModal}>Open</button>
      <Modal isModalOpen={isModalOpen} handleModal={handleModal} title="Overskrift">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa corrupti exercitationem ad neque asperiores rem?</p>
      </Modal>
      <Accordion title="Accordion 1">
        <h3>Lorem, ipsum.</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim in molestias nemo fuga hic rem, doloribus praesentium vel explicabo error incidunt beatae placeat esse, id sit eos recusandae molestiae asperiores?</p>
      </Accordion>
      <CookieBanner />
    </>
  )
}

export default App
