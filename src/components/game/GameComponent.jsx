import styles from "./GameStyles.module.css";
import BoardContainer from "../board-container/BoardContainerComponent";
import KeyboardContainer from "../keyboard-container/KeyboardContainerComponent";

const Game = () => {
    return (
        <div className={styles.game}>
            <BoardContainer />
            <KeyboardContainer />
        </div>
    );
};
export default Game;
