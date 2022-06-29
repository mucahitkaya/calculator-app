import "./themebar.css";

export default function ThemeBar(props) {
  return (
    <div className={`themebar ${props.theme}`}>
      <h3 className={`${props.theme}`}>calc</h3>
      <div id="theme-container">
        <label className="theme-label" htmlFor="theme">
          Dark
        </label>
        <input
          onChange={(event) => props.handleClick(event.target)}
          type="range"
          id="theme"
          name="theme"
          min="0"
          max="1"
          step="1"
          list="tickmarks"
        ></input>
        <label className="theme-label" htmlFor="theme">
          Light
        </label>
      </div>
    </div>
  );
}
