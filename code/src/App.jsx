import { Button } from './Components/Button/Button'
import './App.css'

function App() {


  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>

      <Button
        text="Click Me"
        bgColor="blue"
        action={handleClick}
        size="100px"
       />

    </>
  )
}

export default App
