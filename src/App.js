import "./App.css";
import { useSelector } from "react-redux";
import {
  showLavender,
  showSkyBlue,
  showLemonYellow,
  showCoral,
} from "./action/ShowColor";
import { useDispatch } from "react-redux";

function App() {
  const color = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Your favorite color is {color}</h2>
      <input
        type="checkbox"
        name="color"
        value="lavender"
        onClick={() => dispatch(showLavender())}
      />
      <label>lavender</label>

      <input
        type="checkbox"
        name="color"
        value="sky-blue"
        onClick={() => dispatch(showSkyBlue())}
      />
      <label>sky blue</label>

      <input
        type="checkbox"
        name="color"
        value="lemon-yellow"
        onClick={() => dispatch(showLemonYellow())}
      />
      <label>lemon yellow</label>

      <input
        type="checkbox"
        name="color"
        value="coral"
        onClick={() => dispatch(showCoral())}
      />
      <label>coral</label>
    </div>
  );
}

export default App;
