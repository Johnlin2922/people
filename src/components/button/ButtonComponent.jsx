import "./ButtonStyles.css";

const Button = (props) => {
    const { buttonValue } = props;

    let classType = "button";
    classType += buttonValue.length > 1 ? " bigger-button" : "";

    return (
        <div className={classType}>
            <div className="letter">{buttonValue.toUpperCase()}</div>
        </div>
    );
};
export default Button;
