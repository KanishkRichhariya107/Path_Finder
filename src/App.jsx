import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Grid from './components/Grid/Grid'

function App() {

  const [visualize, setVisualize] = useState(false);

  return (
    <>
      <Navbar setVisualize={setVisualize}/>
      <Grid
        visualize={visualize}
        setVisualize={setVisualize}
      />
    </>
  )
}

export default App