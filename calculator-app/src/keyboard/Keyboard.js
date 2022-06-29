import "./keyboard.css";

export default function Keyboard(props) {
  return (
    <div className="keyboardbg">
      <div
        onClick={(event) => {
          props.handleClick(event.target);
        }}
        className={`wrapper ${props.theme}`}
      >
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          1
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          2
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          3
        </button>
        <button id="del" className={`buttons ${props.theme}`}>
          DEL
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          4
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          5
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          6
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          +
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          7
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          8
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          9
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          -
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          .
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          0
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          /
        </button>
        <button id="classicbutton" className={`buttons ${props.theme}`}>
          *
        </button>
        <div className="lastrow">
          <button id="reset" className={`buttons ${props.theme}`}>
            RESET
          </button>
          <button id="equal" className={`buttons ${props.theme}`}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
