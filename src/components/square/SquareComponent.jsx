import "./SquareStyles.css";
import "animate.css";
import { useEffect, useState } from "react";

const Square = (props) => {
    const { value, space } = props;
    //let animationClass = "";//" animate__animated animate__jello";
    const [animate, setAnimate] = useState(false);

    const animateElement = () => {
        setAnimate(true);
        setTimeout(() => {setAnimate(false)}, 500);
    };

    return (
        <div
            className={
                space
                    ? "space"
                    : "square" +
                      (animate ? " animate__animated animate__jello" : " ")
            }
            onClick={animateElement}
        >
            {value === "_" ? " " : value}
        </div>
    );
};

export default Square;
