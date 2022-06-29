import "./App.css";
import { React, useState } from "react";
import Keyboard from "./keyboard/Keyboard";
import Screen from "./screen/Screen";
import ThemeBar from "./themebar/ThemeBar";

function App() {
  const [theme, setTheme] = useState(`hsl(223.9, 25.79%, 31.18%);`);

  function handleClick(e) {
    e.value === "0"
      ? setTheme(`hsl(223.9, 25.79%, 31.18%);`)
      : console.log(theme);
    e.value === "1" ? setTheme(`hsl(0, 0%, 90.2%);`) : console.log(theme);
    e.value === "2" ? setTheme(`hsl(268.33, 75%, 9.41%);`) : console.log(theme);
  }
  return (
    <div className="App" style={{ backgroundColor: `${theme}` }}>
      <h1>{theme}</h1>
      <ThemeBar handleClick={handleClick} />
      <Screen />
      <Keyboard />
    </div>
  );
}

export default App;
