import { useState } from 'react'
import './App.css'
import { Modal } from './Components/Modal/Modal'

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
    </>
  )
}

export default App
