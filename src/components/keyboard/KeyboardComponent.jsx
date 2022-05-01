import Button from "../button/ButtonComponent";
import "./KeyboardStyles.css";

const Keyboard = () => {
    const rowOne = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const rowTwo = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const rowThree = ["enter", "z", "x", "c", "v", "b", "n", "m", "Del"];

    return (
        <div>
            <div className="row">
                {rowOne.map((char) => {
                    console.log(char);
                    return <Button buttonValue={char} />;
                })}
            </div>
            <div className="row">
                {rowTwo.map((char) => {
                    console.log(char);
                    return <Button buttonValue={char} />;
                })}
            </div>
            <div className="row">
                {rowThree.map((char) => {
                    console.log(char);
                    return <Button buttonValue={char} />;
                })}
            </div>
        </div>
    );
};

export default Keyboard;
