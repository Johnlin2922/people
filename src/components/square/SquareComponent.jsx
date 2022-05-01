import "./SquareStyles.css"

const Square = (props) => {
    const {value} = props;
    return (<div className="square">{value}</div>);
}

export default Square;