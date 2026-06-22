import "./Description.css";

function Description({ algorithm }) {

    function getDescription() {

        switch(algorithm){

            case "BFS":
                return "BFS searches the nodes level by level and guarantees the shortest path.";

            case "DFS":
                return "DFS explores one branch deeply before backtracking and does not guarantee the shortest path.";

            case "Dijkstra":
                return "Dijkstra's algorithm guarantees the shortest path by expanding nodes with the smallest distance.";

            case "A*":
                return "A* combines distance travelled and heuristic estimates to efficiently find the shortest path.";

            case "Bi-directional BFS":
                return "Bi-directional BFS searches simultaneously from start and target until the two waves meet.";

            default:
                return "Select an algorithm to visualize Or Just Select the maze algorithm to generate a random maze";
        }

    }

    return (
        <div className="description">
            {getDescription()}
        </div>
    );
}

export default Description;