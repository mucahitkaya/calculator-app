import "./App.css";
import { React, useState } from "react";
import Keyboard from "./keyboard/Keyboard";
import Screen from "./screen/Screen";
import ThemeBar from "./themebar/ThemeBar";

function App() {
  const body = document.getElementsByClassName("App");
  const darkTheme = "dark";
  const lightTheme = "light";

  const [themeStatus, setThemeStatus] = useState(true);
  const [value, setValue] = useState("0");

  function handleClick(e) {
    if (e.name === "theme") {
      if (e.value === "0") setThemeStatus(false);
      else setThemeStatus(true);
    } else if (e.type === "submit") {
      console.log(value);
      setValue((aha) => aha + `${e.textContent}`);
    }
  }

  function adds(number) {}

  return (
    <div className={`App ${themeStatus ? lightTheme : darkTheme}`}>
      <ThemeBar
        handleClick={handleClick}
        theme={themeStatus ? lightTheme : darkTheme}
      />
      <Screen value={value} theme={themeStatus ? lightTheme : darkTheme} />
      <Keyboard
        handleClick={handleClick}
        theme={themeStatus ? lightTheme : darkTheme}
      />
    </div>
  );
}

export default App;
