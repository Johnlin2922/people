import { createContext, useState, useEffect } from "react";
import { getInitialBoardState } from "../utilities/Utilities";

export const BoardContext = createContext({
    boardState: [],
    setBoardState: () => {},
    currentGuess: 0,
    setCurrentGuess: () => {},
    currentRow: 0,
    currentPosition: 0,
    setCurrentPosition: () => {},
    onKeyPress: () => {},
    word: "", 
});

const BoardContextProvider = (props) => {
    const [boardState, setBoardState] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(0);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);
    let status = "";
    const word = "elon musk";

    const handleSubmit = () => {
        const row = boardState[currentRow];
        console.log(row);
        setCurrentRow(currentRow + 1);
        setCurrentPosition(0);
        if(currentRow === 5){
            console.log("gameOver")
            status = "gameOver";
            window.removeEventListener("keydown", onKeyPress);
        }
    }

    const keys = [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "enter",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        "Del",
        "Backspace",
    ];

    const onKeyPress = (key) => {
        // console.log("boardState: ", boardState);
        //console.log(key, keys.includes(key));

        if(currentRow > 6){return;}

        if(status == "gameOver"){
            console.log("hit Gameover block");
            return;
        }

        if(key === "Enter" || key === "enter"){
            if(currentPosition == word.length){
                handleSubmit();
            }
            return;
        }

        if(keys.includes(key)){

            if(key === "Del" || key === "Backspace"){
                if(currentPosition > 0 && currentPosition < word.length){
                    if(boardState[currentRow][currentPosition].value == "_"){
                            boardState[currentRow][currentPosition -1].value = " ";
                            setCurrentPosition(currentPosition - 1);
                        
                        setBoardState(boardState);
                    }
                    else{
                        if(boardState[currentRow][currentPosition -1].value == "_"){
                            boardState[currentRow][currentPosition -2].value = " "
                            setCurrentPosition(currentPosition -2);
                            setBoardState(boardState);
                        }
                        else{
                            boardState[currentRow][currentPosition -1].value = " ";
                            setCurrentPosition(currentPosition -1);
                            setBoardState(boardState);
                        }
                    }
                }
                else{
                    boardState[currentRow][currentPosition -1].value = " ";
                    setCurrentPosition(currentPosition -1);
                    setBoardState(boardState);
                }
                return;
            }

            if(currentPosition >= boardState[currentRow].length){
                return;
            }

            // console.log("squareValue before: ", boardState[currentRow][currentPosition]);
            // console.log("is space???: ", boardState[currentRow][currentPosition] === "_");
            if(boardState[currentRow][currentPosition].value == "_"){
                boardState[currentRow][currentPosition + 1].value = key.toUpperCase();
                setCurrentPosition(currentPosition + 2);
                setBoardState(boardState);
            }
            else{
                boardState[currentRow][currentPosition].value = key.toUpperCase();
                setCurrentPosition(currentPosition + 1);
                setBoardState(boardState);

            }
            // console.log("currentPosition, ", currentPosition);
        }
    };

    useEffect(() => {
        const arr = getInitialBoardState(word);
        setBoardState(arr);
    }, []);

    const value = {
        boardState,
        setBoardState,
        currentGuess,
        setCurrentGuess,
        currentRow,
        setCurrentRow,
        currentPosition,
        setCurrentPosition,
        onKeyPress
    };

    return (
        <BoardContext.Provider value={value}>
            {props.children}
        </BoardContext.Provider>
    );
};

export default BoardContextProvider;
