import "./App.css";
import { React, useState } from "react";
import Keyboard from "./keyboard/Keyboard";
import Screen from "./screen/Screen";
import ThemeBar from "./themebar/ThemeBar";

function App() {

  const darkTheme = "dark";
  const lightTheme = "light";

  const [themeStatus, setThemeStatus] = useState(true);
  const [truthy,setTruthy]=useState(false);
  const [sign,setSign]=useState("");
  const [value, setValue] = useState("0");
  const [secondvalue, setSecondValue] = useState("0");

  function handleClick(e) {

    //THEME--
    if (e.name === "theme") {
      if (e.value === "0") setThemeStatus(false);
      else setThemeStatus(true);
    } 
    //KEYBOARD--
    else if (e.type === "submit") {
      //check for if there is not any input number but there is calculation sign input    
      if(value==="0"&&isNaN(e.textContent))alert("Please enter number first!");
      
    }
  
  }
 
  //  setValue((prevValue) => prevValue + `${clickedValue }`);
    
  

  
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
