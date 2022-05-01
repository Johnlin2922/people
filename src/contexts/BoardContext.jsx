import { createContext, useState, useEffect } from "react";
import { SquareType } from "../constants/constants";

export const BoardContext = createContext({
    boardState: [],
    setBoardState: () => {},
    currentGuess: 0,
    setCurrentGuess: () => {},
    currentRow: 0,
    currentPosition: 0,
    setCurrentPosition: () => {},
    onKeyPress: () => {},
    word: "the rock", 
});

const getInitialBoardState = (word) => {
    let arr = [];
    for(let i = 0; i < 6; i++){
        let row = [];
        for(let j = 0; j < word.length; j++){
            if(word[j] === " "){
                row.push("_");
            }
            else{
                row.push(" ");
            }
        }
        arr.push(row);
    }
    return arr;
}

const BoardContextProvider = (props) => {
    const [boardState, setBoardState] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(0);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);
    let status = "";

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
    ];

    const onKeyPress = (key) => {
        // console.log("boardState: ", boardState);
        // console.log(key, keys.includes(key));

        if(status == "gameOver"){
            console.log("hit Gameover block");
            return;
        }

        if(key === "Enter" || key === "enter"){
            handleSubmit();
            return;
        }

        if(currentPosition >= boardState[currentRow].length){
            return;
        }

        if(keys.includes(key)){
            // console.log("squareValue before: ", boardState[currentRow][currentPosition]);
            // console.log("is space???: ", boardState[currentRow][currentPosition] === "_");
            if(boardState[currentRow][currentPosition] == "_"){
                boardState[currentRow][currentPosition + 1] = key;
                setCurrentPosition(currentPosition + 2);
                setBoardState(boardState);
            }
            else{
                boardState[currentRow][currentPosition] = key;
                setCurrentPosition(currentPosition + 1);
                setBoardState(boardState);

            }
            // console.log("currentPosition, ", currentPosition);
        }
    };

    useEffect(() => {
        const arr = getInitialBoardState("The Rock");
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
