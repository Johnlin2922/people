import "./SquareStyles.css"

const Square = (props) => {
    const {value, space} = props;
    //console.log("space", space);
    return (<div className={space ? "space" : "square"}>{value === "_" ? " " : value}</div>);
}

export default Square;