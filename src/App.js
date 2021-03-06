import "./App.css";
import Header from "./components/header/HeaderComponent";
import Game from "./components/game/GameComponent";
import BoardContextProvider from "./contexts/BoardContext";
import Modal from "./components/modal/ModalComponent";

function App() {

    return (
        <div className="App">
            <BoardContextProvider>
                <Header />
                <Game />
                <Modal />
            </BoardContextProvider>
        </div>
    );
}

export default App;
