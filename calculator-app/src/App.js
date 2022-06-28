import "./App.css";
// import theme from "./assets/theme1.jpg";
import Keyboard from "./Keyboard";
import Screen from "./Screen";
import ThemeBar from "./ThemeBar";

function App() {
  return (
    <div className="App">
      <ThemeBar />
      <Screen />
      <Keyboard />
    </div>
  );
}

export default App;
