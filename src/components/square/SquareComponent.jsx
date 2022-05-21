import "./SquareStyles.css";
import "animate.css";
import { useEffect, useState } from "react";

const Square = (props) => {
    const { value, space, submit, squareIndex, result} = props;
    //let animationClass = "";//" animate__animated animate__jello";
    const [animateChange, setAnimateChange] = useState(false);
    const [animateSubmit, setAnimateSubmit] = useState(false);
    const [applyColor, setApplyColor] = useState(false);
    let color = "gray ";

    useEffect(() => {
        animateElement();
    }, [value, submit]);

    const animateElement = () => {
        if (submit) {
            setTimeout(() => setAnimateSubmit(true), 200 * (squareIndex + 1));
            setTimeout(() => {
                setAnimateSubmit(false);
            }, 800 * (squareIndex + 1));

            setTimeout(() => setApplyColor(true), (200 * (squareIndex + 1)) + 325);
            
        } else {
            setAnimateChange(true);
            setTimeout(() => {
                setAnimateChange(false);
            }, 500);
        }
    };

    return (
        <div
            className={
                space
                    ? "space "
                    : "square " +
                      (animateChange ? "anime " : " ") +
                      (animateSubmit
                          ? "rotate-scale-down "
                          : " ") + 
                        (applyColor ? (result === "correct" ? "blue " : "") + (result === "contains" ? "yellow " : "") + (result === "incorrect" ? "gray " : "") : " ")
            }
            onClick={animateElement}
        >
            <a className="content">{value === "_" ? " " : value}</a>
        </div>
    );
};

export default Square;
