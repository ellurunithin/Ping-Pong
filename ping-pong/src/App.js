import GameArea from "./Components/GameArea";
import './App.css';
const App = () => {
  return (
    <div>
      <h1 className="heading" >ping pong Game</h1>
      <p>Use 'A' and 'D' for the top paddle, and the arrow keys for the bottom paddle.</p>
      <GameArea />
    </div>
  );
};

export default App;
