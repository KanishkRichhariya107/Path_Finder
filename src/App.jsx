import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Grid from './components/Grid/Grid'

function App() {

  const [visualize, setVisualize] = useState(false);
  const [Algorithm,setAlgorithm]= useState("BFS")
  const [reset,setReset]= useState(false)

  return (
    <>
      <Navbar 
      setVisualize={setVisualize}
      setAlgorithm={setAlgorithm}
      Algorithm={Algorithm}
      reset={reset}
      setReset={setReset}
      />
      <Grid
        visualize={visualize}
        setVisualize={setVisualize}
        Algorithm={Algorithm}
        reset={reset}
        setReset={setReset}        
      />
    </>
  )
}

export default App