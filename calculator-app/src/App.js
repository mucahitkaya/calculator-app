import "./App.css";
import { React, useState } from "react";
import Keyboard from "./keyboard/Keyboard";
import Screen from "./screen/Screen";
import ThemeBar from "./themebar/ThemeBar";

function App() {
  const body = document.body;
  const darkTheme = "dark";
  const lightTheme = "light";

  const [themeStatus, setThemeStatus] = useState(true);

  function handleClick(e) {
    if (e.value === "0") setThemeStatus(true);
    else setThemeStatus(false);
  }
  return (
    <div className="App">
      <ThemeBar
        handleClick={handleClick}
        theme={themeStatus ? darkTheme : lightTheme}
      />
      <Screen theme={themeStatus ? darkTheme : lightTheme} />
      <Keyboard />
    </div>
  );
}

export default App;
