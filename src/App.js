import "./App.css";
import { useSelector } from "react-redux";
import { showMauve, showYellowGreen } from "./action/ShowColor";
import { useDispatch } from "react-redux";

function App() {
  const color = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>My favorite color is {color}</h1>
      <div>
        <input
          type="checkbox"
          value="mauve"
          onClick={() => dispatch(showMauve())}
        />
        <label>mauve</label>
      </div>
      <div>
        <input type="checkbox" value="yellow-green" />
        <label>yellow green</label>
      </div>
      <div>
        <input type="checkbox" value="robbin-egg" />
        <label>robin's egg</label>
      </div>
      <div>
        <input type="checkbox" value="bubblegum" />
        <label>bubblegum</label>
      </div>
    </div>
  );
}

export default App;
