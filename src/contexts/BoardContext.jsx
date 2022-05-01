import { createContext, useState, useEffect } from "react";

export const BoardContext = createContext({
    boardState: [],
    setBoardState: () => {},
    currentGuess: 0,
    setCurrentGuess: () => {},
    currentRow: 0,
    currentPosition: 0,
    setCurrentPosition: () => {},
    onKeyPress: () => {}
});

const BoardContextProvider = (props) => {
    const [boardState, setBoardState] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(0);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        setBoardState(
            [["A", "P", "P", "L", "E"],
            ["M", "E", "D", "I", "A"],
            ["M", "E", "D", "I", "A"], 
            ["M", "E", "D", "I", "A"], 
            ["M", "E", "D", "I", "A"],
            ["M", "E", "D", "I", "A"]]
        );
    }, []);

    const onKeyPress = (key) => {
        console.log("context: Key pressed: ", key);
    }

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
