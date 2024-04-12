import "./App.css";
import { GameBoard, Keyboard } from "./components";

function App() {
  return (
    <div className="App">
      <h2>Wordle</h2>
      <GameBoard />
      <Keyboard />
    </div>
  );
}

export default App;
