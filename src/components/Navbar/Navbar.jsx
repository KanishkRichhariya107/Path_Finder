import React from 'react'
import './Navbar.css'
const Navbar = ({setVisualize,setAlgorithm,Algorithm,reset,setReset,clearPath,setClearPath}) => {
  return (
    <div>
      <div className="navbar">        
        <div className='logo'>
                PathFinder 
        </div>
        <div className="nav-controls">
          <button onClick={()=>setReset(true)}>Reset Grid</button>
          <button onClick={()=>setClearPath(true)}>clear path</button>
            <button onClick={()=>setVisualize(true)}>Visualize</button>
            <select onChange={(e)=>
              setAlgorithm(e.target.value)
            }>
                <option > BFS</option>
                <option > Dijkstra</option>
                <option > DFS</option>
                <option > A*</option>
                <option > Bi-directional BFS</option>
            </select>            
        </div>
      </div>
    </div>
  )
}

export default Navbar
