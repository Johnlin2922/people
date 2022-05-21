import Square from "../square/SquareComponent";
import "./BoardRowStyles.css"

const BoardRow = (props) => {
    const { row, rowIndex, currentRow } = props;

    return (
        <div className="board-row">
            {row.map(({ value, result }, squareIndex) => {
                return (
                    <Square
                        value={value}
                        key={rowIndex + "_" + squareIndex}
                        squareIndex={squareIndex}
                        space={value === "_" ? true : false}
                        result={result}
                        submit={currentRow > rowIndex ? true : false}
                    />
                );
            })}
        </div>
    );
};
export default BoardRow;
