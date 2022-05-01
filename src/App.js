import "./App.css";
import Header from "./components/header/HeaderComponent";
import Game from "./components/game/GameComponent";
import BoardContextProvider from "./contexts/BoardContext";

function App() {
    return (
        <div className="App">
            <BoardContextProvider>
                <Header />
                <Game />
            </BoardContextProvider>
        </div>
    );
}

export default App;
