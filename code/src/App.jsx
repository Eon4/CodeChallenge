import { Button } from './Components/Button/Button'
import { Headline } from './Components/Headline/Headline';
import { Grid } from './Components/Grid/grid';

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
        bgColor="red"
        action={handleClick}
        sizeW="200px"
        sizeH="30px"
      />

      <Grid
        display="grid"
        columns="repeat(auto-fill, minmax(200px, 1fr))"
        size="200px"
        bgColor="blue"
        gap="20px" 
        border="2px solid"
        marginTOP="30px" 
        />


    </>
  )
}

export default App
