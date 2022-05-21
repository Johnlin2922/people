import "./SquareStyles.css";
import "animate.css";
import { useEffect, useState } from "react";

const Square = (props) => {
    const { value, space, submit, squareIndex } = props;
    //let animationClass = "";//" animate__animated animate__jello";
    const [animateChange, setAnimateChange] = useState(false);
    const [animateSubmit, setAnimateSubmit] = useState(false);

    useEffect(() => {
        animateElement();
    }, [value, submit]);

    const animateElement = () => {
        if (submit) {
            setTimeout(() => setAnimateSubmit(true), 200 * (squareIndex + 1));
            setTimeout(() => {
                setAnimateSubmit(false);
            }, 400 * (squareIndex + 1));
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
                    ? "space"
                    : "square" +
                      (animateChange ? " anime " : " ") +
                      (animateSubmit
                          ? " animate__animated animate__flipInX "
                          : " ")
            }
            onClick={animateElement}
        >
            <a className="content">{value === "_" ? " " : value}</a>
        </div>
    );
};

export default Square;
