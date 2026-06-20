import React from 'react'
import './Navbar.css'
const Navbar = ({setVisualize,setAlgorithm,Algorithm,reset,setReset,clearPath,setClearPath,isAnimating,mazeAlgorithm,setMazeAlgorithm}) => {
  return (
    <div>
      <div className="navbar">        
        <div className='logo'>
                PathFinder 
        </div>
        <div className="nav-controls">
          <button disabled={isAnimating} onClick={()=>setReset(true)}>Reset Grid</button>
          <button disabled={isAnimating} onClick={()=>setClearPath(true)}>clear path</button>
            <button disabled={isAnimating} onClick={()=>setVisualize(true)}>Visualize</button>
            <select disabled={isAnimating} onChange={(e)=>
              setAlgorithm(e.target.value)
            }>
                  <option value="">
        Pathfinding Algorithm
    </option>
                <option > BFS</option>
                <option > Dijkstra</option>
                <option > DFS</option>
                <option > A*</option>
                <option > Bi-directional BFS</option>
            </select> 
            <select
value={mazeAlgorithm}
onChange={(e)=>setMazeAlgorithm(e.target.value)}
disabled={isAnimating}
>
    <option value="">
        Maze Generation
    </option>

    <option value="Recursive Maze">
        Recursive Maze
    </option>

    <option value="Prim Maze">
        Prim Maze
    </option>

</select>           
        </div>
      </div>
    </div>
  )
}

export default Navbar
