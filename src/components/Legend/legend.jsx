import "./Legend.css";
import startImg from "../../assets/rat-svgrepo-com.svg";
import endImg from "../../assets/cheese-1-svgrepo-com.svg";

function Legend() {
    return (
        <div className="legend">

            <div className="legend-item">
                <img src={startImg} alt="" />
                <span>Start</span>
            </div>

            <div className="legend-item">
                <img src={endImg} alt="" />
                <span>Target</span>
            </div>

            <div className="legend-item">
                <div className="legend-node wall-node"></div>
                <span>Wall</span>
            </div>

            <div className="legend-item">
                <div className="legend-node visited-node"></div>
                <span>Visited</span>
            </div>

            <div className="legend-item">
                <div className="legend-node path-node"></div>
                <span>Path</span>
            </div>

        </div>
    );
}

export default Legend;