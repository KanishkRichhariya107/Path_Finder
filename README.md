# Path Finder Visualizer

Path Finder Visualizer is an interactive web application that helps visualize how different pathfinding algorithms work. It allows users to create walls, move the start and target nodes, generate mazes, and watch various algorithms search for the shortest path through smooth animations.

The project was built from scratch using React and JavaScript with the goal of understanding graph traversal algorithms and creating an intuitive way to visualize them.

---

## Features

### Pathfinding Algorithms

* Breadth First Search (BFS)
* Depth First Search (DFS)
* Dijkstra's Algorithm
* A* Search Algorithm
* Bidirectional BFS

### Maze Generation

* Recursive Maze Generation
* Prim's Maze Generation

### Interactive Grid

* Drag and move start node
* Drag and move target node
* Draw walls by dragging the mouse
* Erase walls by dragging
* Reset board
* Clear paths without removing walls

### Animations

* Animated visited nodes
* Animated shortest path
* Wall pop animation
* Pulsating start and target nodes
* Maze generation animations
* Buttons are disabled while animations are running

### User Interface

* Legend section describing different node types
* Algorithm description section
* Separate controls for pathfinding and maze generation
* Custom images for start and target nodes
* Responsive and clean interface

---

## Tech Stack

* React
* JavaScript
* HTML
* CSS
* Vite

---

## Project Structure

```text
src
│
├── Algorithms
├── MazeAlgorithms
├── animations
├── constants
├── handlers
├── mazeHandlers
├── utils
├── visualizers
├── components
```

The codebase is organized to separate algorithms, animations, event handlers, utilities, and components, making it easier to maintain and extend.

---

# Getting Started

## Prerequisites

Make sure Node.js is installed on your system.

You can check it using:

```bash
node -v
npm -v
```

---

## Clone the Repository

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd path-finder
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

The application will start and a local URL similar to:

```text
http://localhost:5173
```

will appear in the terminal.

Open the link in your browser to use the application.

---

## How to Use

### Select an Algorithm

Choose any pathfinding algorithm from the dropdown menu.

### Create Walls

Click and drag on the grid to create walls.

### Move Nodes

Drag the start and target images to change their positions.

### Generate Mazes

Select a maze generation algorithm and watch the maze being built automatically.

### Visualize

Press the Visualize button to see how the selected algorithm searches for the path.

### Reset

Reset Board restores everything to its default state.

Clear Path removes only the previous traversal while preserving the walls.

---

## Motivation

This project was created to understand graph traversal algorithms and visualize their behavior in an interactive way. Building the visualizer from scratch helped in gaining a deeper understanding of pathfinding techniques, state management in React, animations, and project structuring.

---

## Future Improvements

* Weighted nodes
* Recursive Division Maze
* Speed controls
* Dark mode
* Theme support
* Character movement along the shortest path
* Statistics panel
* Additional graph algorithms

---

## Author

Kanishk Richhariya

If you found this project interesting, feel free to star the repository and share feedback.
