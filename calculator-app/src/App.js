import "./App.css";
import { React, useState } from "react";
import Keyboard from "./keyboard/Keyboard";
import Screen from "./screen/Screen";
import ThemeBar from "./themebar/ThemeBar";

function App() {

  const darkTheme = "dark";
  const lightTheme = "light";

  const [themeStatus, setThemeStatus] = useState(true);
  const [total,setTotal]=useState("0");
  const [sign,setSign]=useState("0");
  const [firstValue, setFirstValue] = useState("0");
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
      
      if(firstValue==="0"&&isNaN(e.textContent))alert("Please enter number first!");
      else if(isNaN(e.textContent)===false){
        if(sign==="0")setFirstValue((prevFirstValue)=>prevFirstValue+e.textContent);
        else if(sign!=="0") {setSecondValue((prevSecondValue)=>prevSecondValue+e.textContent);}
      }
      else{
        setSign(e.textContent)
        switch(sign){
          case "DEL":
            alert("We Cannot Do That");
            break;
          case "RESET":
            setTotal("0");
            setFirstValue("0");
            setSecondValue("0");
            setSign("0");
            break;
          case "+":
            setTotal(parseInt(firstValue)+parseInt(secondvalue));
            setFirstValue("0");
            setSecondValue("0");
            setSign("0");
            break;
          case "-":
            setTotal(firstValue-secondvalue);
            setFirstValue("0");
            setSecondValue("0");
            setSign("0");
            break;
          case "=":
            setFirstValue("0");
            setSecondValue("0");
            setSign("0");
            break;
          default:
            console.log("nothing happend");
        }
      }
    }
  }

 
  console.log(firstValue,secondvalue,sign,total);
  
  return (
    <div className={`App ${themeStatus ? lightTheme : darkTheme}`}>
      <ThemeBar
        handleClick={handleClick}
        theme={themeStatus ? lightTheme : darkTheme}
      />
      <Screen value={total} theme={themeStatus ? lightTheme : darkTheme} />
      <Keyboard
        handleClick={handleClick}
        theme={themeStatus ? lightTheme : darkTheme}
      />
    </div>
  );
}

export default App;
