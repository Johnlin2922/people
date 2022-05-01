import "./ButtonStyles.css";
import { BoardContext } from "../../contexts/BoardContext";
import { useContext } from "react";

const Button = (props) => {
    const { buttonValue } = props;

    const {onKeyPress} = useContext(BoardContext);

    let classType = "button";
    classType += buttonValue.length > 1 ? " bigger-button" : "";

    const handleKeyPress = () => {
        onKeyPress(buttonValue);
    }

    return (
        <div className={classType} onClick={handleKeyPress}>
            <div className="letter">{buttonValue.toUpperCase()}</div>
        </div>
    );
};
export default Button;
