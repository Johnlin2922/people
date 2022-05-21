import Square from "../square/SquareComponent";
import "./BoardStyles.css";
import { BoardContext } from "../../contexts/BoardContext";
import { useContext, useEffect } from "react";

const Board = () => {
    const { boardState, currentRow, word } = useContext(BoardContext);

    const setBoardStyle = () => {
        if (boardState !== undefined) {
            let board = document.getElementById("board");
            let row = boardState[0];
            if (row !== undefined) {
                let style = "";
                row.map((square) => {
                    if (square === " ") {
                        style += "1fr ";
                    } else {
                        style += "0.25fr ";
                    }
                    return null;
                });
                board.style.gridTemplateColumns = style;
            }
        }

        document.documentElement.style.setProperty('--word-length', word.length + 1);
    };

    useEffect(() => {
        setBoardStyle();
    });

    return (
        <div className="board" id="board">
            {boardState.map((row, rowIndex) => {
                return row.map(({value, result}, squareIndex) => {
                    return (
                        <Square
                            value={value}
                            key={rowIndex + "_" + squareIndex}
                            squareIndex={squareIndex}
                            space={value === "_" ? true : false}
                            result={result}
                            submit={(currentRow > rowIndex) ? true : false}
                        />
                    );
                });
            })}
        </div>
    );
};
export default Board;
