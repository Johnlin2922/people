import React from "react";
import Button from "../button/ButtonComponent";
import "./KeyboardStyles.css";
import { BoardContext } from "../../contexts/BoardContext";
import { useContext } from "react";
import { useEffect } from "react";

const Keyboard = () => {
    const { onKeyPress, boardState } = useContext(BoardContext);

    const rowOne = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const rowTwo = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const rowThree = ["enter", "z", "x", "c", "v", "b", "n", "m", "Del"];

    const handleOnKeyPress = (e) => {
        //console.log(boardState);
        onKeyPress(e.key);
    }

    useEffect(() => {
        window.addEventListener("keydown", handleOnKeyPress);
        console.log("eventListenerUseEffect");
    }, []);

    return (
        <React.Fragment>
            <div className="row">
                {rowOne.map((char) => {
                    return (
                        <Button buttonValue={char} key={"keyboard_" + char} />
                    );
                })}
            </div>
            <div className="row">
                {rowTwo.map((char) => {
                    return (
                        <Button buttonValue={char} key={"keyboard_" + char} />
                    );
                })}
            </div>
            <div className="row">
                {rowThree.map((char) => {
                    return (
                        <Button buttonValue={char} key={"keyboard_" + char} />
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default Keyboard;
