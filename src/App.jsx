import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Grid from './components/Grid/Grid'

function App() {

  const [visualize, setVisualize] = useState(false);
  const [Algorithm,setAlgorithm]= useState("")
const [mazeAlgorithm,setMazeAlgorithm]=useState("");
  const [reset,setReset]= useState(false)
  const [clearPath,setClearPath]= useState(false)
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <>
      <Navbar 
      setVisualize={setVisualize}
      setAlgorithm={setAlgorithm}
      Algorithm={Algorithm}
      reset={reset}
      setReset={setReset}
      clearPath={clearPath}
      setClearPath={setClearPath}
      isAnimating={isAnimating}
      mazeAlgorithm={mazeAlgorithm}
      setMazeAlgorithm={setMazeAlgorithm}
      />
      <Grid
        visualize={visualize}
        setVisualize={setVisualize}
        Algorithm={Algorithm}
        reset={reset}
        setReset={setReset}      
        clearPath={clearPath}
      setClearPath={setClearPath}  
      isAnimating={isAnimating}
      setIsAnimating={setIsAnimating}
      MazeAlgorithm={mazeAlgorithm}
      />
    </>
  )
}

export default App