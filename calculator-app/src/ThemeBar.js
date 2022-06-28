import "./App.css";

export default function ThemeBar() {
  return (
    <div className="theme-container">
      <h3>calc</h3>
      <div>
        <label style={{}} for="theme">
          Theme
        </label>
        <input
          type="range"
          id="theme"
          name="theme"
          min="0"
          max="2"
          step="1"
          list="tickmarks"
        ></input>
      </div>
    </div>
  );
}
