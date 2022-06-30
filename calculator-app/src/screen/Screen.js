import "./screen.css";
export default function Screen(props) {
  return (
    <div className={`screen ${props.theme}`}>
      <h3>{props.value}</h3>
    </div>
  );
}
