import { createContext, useState, useEffect } from "react";

export const BoardContext = createContext({
    boardState: [],
    setBoardState: () => {},
    currentGuess: 0,
    setCurrentGuess: () => {},
    currentRow: 0
});

const BoardContextProvider = (props) => {
    const [boardState, setBoardState] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(0);
    const [currentRow, setCurrentRow] = useState(0);

    useEffect(() => {
        setBoardState(
            [["A", "P", "P", "L", "E"],
            ["M", "E", "D", "I", "A"]]
        );
    }, []);

    const value = {
        boardState,
        setBoardState,
        currentGuess,
        setCurrentGuess,
        currentRow, 
        setCurrentRow
    };

    return (
        <BoardContext.Provider value={value}>
            {props.children}
        </BoardContext.Provider>
    );
};

export default BoardContextProvider;
