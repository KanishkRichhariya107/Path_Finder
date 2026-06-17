import React from 'react'
import './Navbar.css'
const Navbar = ({setVisualize,setAlgorithm,Algorithm,Reset,setReset}) => {
  return (
    <div>
      <div className="navbar">        
        <div className='logo'>
            Algorithm Visualizer
        </div>
        <div className="nav-controls">
          <button onClick={()=>setReset(true)}>Reset Grid</button>
            <button onClick={()=>setVisualize(true)}>Visualize</button>
            <select onChange={(e)=>
              setAlgorithm(e.target.value)
            }>
                <option > BFS</option>
                <option > Dijkstra</option>
                <option > DFS</option>
                <option > A*</option>
            </select>            
        </div>
      </div>
    </div>
  )
}

export default Navbar
