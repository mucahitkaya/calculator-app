import "./screen.css";
export default function Screen(props) {
  console.log(props.theme);
  return (
    <div className={`screen ${props.theme}`}>
      <h3>Screen</h3>
    </div>
  );
}
