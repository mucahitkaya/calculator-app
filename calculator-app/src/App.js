import "./App.css";
import { React, useState } from "react";
import Keyboard from "./keyboard/Keyboard";
import Screen from "./screen/Screen";
import ThemeBar from "./themebar/ThemeBar";

function App() {
  const [theme, setTheme] = useState({
    theme1: "hsl(0, 0%, 90.2%)",
    theme2: "amanın",
    theme3: "yandımm",
  });

  function handleClick(e) {
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <h1>{theme.theme3}</h1>
      <ThemeBar handleClick={handleClick} />
      <Screen />
      <Keyboard />
    </div>
  );
}

export default App;
