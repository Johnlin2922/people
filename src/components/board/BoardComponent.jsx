import Square from "../square/SquareComponent";
import "./BoardStyles.css";
import { BoardContext } from "../../contexts/BoardContext";
import { useContext, useEffect } from "react";
import BoardRow from "../board-row/BoardRowComponent";

const Board = () => {
    const { boardState, currentRow } = useContext(BoardContext);

    // const setBoardStyle = () => {
    //     if (boardState !== undefined) {
    //         let board = document.getElementById("board");
    //         let row = boardState[0];
    //         if (row !== undefined) {
    //             let style = "";
    //             row.map((square) => {
    //                 if (square === " ") {
    //                     style += "1fr ";
    //                 } else {
    //                     style += "0.25fr ";
    //                 }
    //                 return null;
    //             });
    //             board.style.gridTemplateColumns = style;
    //         }
    //     }
    // };

    // useEffect(() => {
    //     setBoardStyle();
    // });

    return (
        <div className="board" id="board">
            {boardState.map((row, rowIndex) => {
                return <BoardRow row ={row} rowIndex={rowIndex} currentRow={currentRow}/>
            })}
        </div>
    );
};
export default Board;
