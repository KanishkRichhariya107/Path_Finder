import React from 'react'
import './Navbar.css'
const Navbar = ({setVisualize,setAlgorithm,Algorithm}) => {
  return (
    <div>
      <div className="navbar">        
        <div className='logo'>
            Algorithm Visualizer
        </div>
        <div className="nav-controls">
            <button onClick={()=>setVisualize(true)}>Visualize</button>
            <select onChange={(e)=>
              setAlgorithm(e.target.value)
            }>
                <option > BFS</option>
                <option > Djikstra</option>
                <option > DFS</option>
                <option > A*</option>
            </select>            
        </div>
      </div>
    </div>
  )
}

export default Navbar
