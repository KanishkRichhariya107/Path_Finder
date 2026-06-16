import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Grid from './components/Grid/Grid'

function App() {

  const [visualize, setVisualize] = useState(false);
  const [Algorithm,setAlgorithm]= useState("BFS")

  return (
    <>
      <Navbar 
      setVisualize={setVisualize}
      setAlgorithm={setAlgorithm}
      Algorithm={Algorithm}
      />
      <Grid
        visualize={visualize}
        setVisualize={setVisualize}
        Algorithm={Algorithm}
      />
    </>
  )
}

export default App