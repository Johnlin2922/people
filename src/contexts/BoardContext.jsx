import { createContext, useState, useEffect, useInsertionEffect } from "react";
import {
    getInitialBoardState,
    calculateResultsForRow,
    getPerson,
    getHeightFromWord,
} from "../utilities/Utilities";

export const BoardContext = createContext({
    boardState: [],
    setBoardState: () => {},
    currentGuess: 0,
    setCurrentGuess: () => {},
    currentRow: 0,
    currentPosition: 0,
    setCurrentPosition: () => {},
    onKeyPress: () => {},
    person: { name: "foo bar" },
    gameOver: false,
    showModal: false,
    setShowModal: () => {},
});

const BoardContextProvider = (props) => {
    const [boardState, setBoardState] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(0);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [showModal, setShowModal] = useState(false);

    let person = getPerson();

    const name = person.name.toUpperCase();

    const handleSubmit = () => {
        let row = boardState[currentRow];

        calculateResultsForRow(row, name);

        setCurrentRow(currentRow + 1);
        setCurrentPosition(0);
        if (currentRow === getHeightFromWord(name) - 1) {
            setGameOver(true);
            console.log("Game Over");
            setShowModal(true);
            window.removeEventListener("keydown", onKeyPress);
        }
    };

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

        if (currentRow > getHeightFromWord(name) - 1) {
            return;
        }

        if(key === "8"){
            setShowModal(true);
        }

        if (key === "Enter" || key === "enter") {
            if (currentPosition === name.length) {
                handleSubmit();
            }
            return;
        }

        if (keys.includes(key)) {
            if (key === "Del" || key === "Backspace") {
                if (currentPosition > 0 && currentPosition < name.length) {
                    if (boardState[currentRow][currentPosition].value === "_") {
                        boardState[currentRow][currentPosition - 1].value = "";
                        setCurrentPosition(currentPosition - 1);

                        setBoardState(boardState);
                    } else {
                        if (
                            boardState[currentRow][currentPosition - 1]
                                .value === "_"
                        ) {
                            boardState[currentRow][currentPosition - 2].value =
                                "";
                            setCurrentPosition(currentPosition - 2);
                            setBoardState(boardState);
                        } else {
                            boardState[currentRow][currentPosition - 1].value =
                                "";
                            setCurrentPosition(currentPosition - 1);
                            setBoardState(boardState);
                        }
                    }
                } else {
                    if (currentPosition === 0) {
                        return;
                    }
                    boardState[currentRow][currentPosition - 1].value = "";
                    setCurrentPosition(currentPosition - 1);
                    setBoardState(boardState);
                }
                return;
            }

            if (currentPosition >= boardState[currentRow].length) {
                return;
            }

            // console.log("squareValue before: ", boardState[currentRow][currentPosition]);
            // console.log("is space???: ", boardState[currentRow][currentPosition] === "_");
            if (boardState[currentRow][currentPosition].value === "_") {
                boardState[currentRow][currentPosition + 1].value =
                    key.toUpperCase();
                setCurrentPosition(currentPosition + 2);
                setBoardState(boardState);
            } else {
                boardState[currentRow][currentPosition].value =
                    key.toUpperCase();
                setCurrentPosition(currentPosition + 1);
                setBoardState(boardState);
            }
            // console.log("currentPosition, ", currentPosition);
        }
    };

    useEffect(() => {
        const arr = getInitialBoardState(name);
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
        onKeyPress,
        person,
        gameOver,
        showModal,
        setShowModal,
    };

    return (
        <BoardContext.Provider value={value}>
            {props.children}
        </BoardContext.Provider>
    );
};

export default BoardContextProvider;
