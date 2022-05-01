import { createContext, useState, useEffect } from "react";

export const BoardContext = createContext({
    boardState: [],
    setBoardState: () => {},
    currentGuess: 0,
    setCurrentGuess: () => {},
    currentRow: 0,
    currentPosition: 0,
    setCurrentPosition: () => {},
    onKeyPress: () => {},
    isInitialized: false, 
});

const BoardContextProvider = (props) => {
    const [boardState, setBoardState] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(0);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);

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
        console.log("boardState: ", boardState);
        console.log(key, keys.includes(key));
        if(keys.includes(key)){
            boardState[currentRow][currentPosition] = key;
            setCurrentPosition(currentPosition + 1);
            setBoardState(boardState);
            console.log("currentPosition, ", currentPosition);
        }
    };

    useEffect(() => {
        setBoardState([
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
        ]);
        console.log("contextUseEffect:");
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
