import Square from "../square/SquareComponent";
import "./BoardStyles.css";
import { BoardContext } from "../../contexts/BoardContext";
import { useContext } from "react";

const Board = () => {

    const func = () => {
        let board = document.getElementById("board");
        console.log(board);
        board.style.gridTemplateColumns = "1fr 1fr 0.25fr 1fr 1fr 1fr";
    }

    const {boardState} = useContext(BoardContext);

    return <div className="board" id="board">
        {boardState.map((row, rowIndex) => {
            return(row.map((value, squareIndex) => {
                return <Square value={value} key={rowIndex + "_" + squareIndex}/>
            }));
        })}
    </div>;
};
export default Board;
