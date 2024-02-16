import { Button } from './Components/Button/Button'
import { Headline } from './Components/Headline/Headline';
import './App.css'

function App() {


  const handleClick = () => {
    alert('Stop that!');
  };

  return (
    <>
      <Headline 
      title="Northern Pileated Marmoset"
      display="flex"
      justifyContent="center"
      alignitems="center"
      />

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
