import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">        
        <div className='logo'>
            Algorithm Visualizer
        </div>
        <div className="nav-controls">
            <button>Visualize</button>
            <select >
                <option > Djikstra</option>
                <option > BFS</option>
                <option > DFS</option>
                <option > A*</option>
            </select>            
        </div>
      </div>
    </div>
  )
}

export default Navbar
