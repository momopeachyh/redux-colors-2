import "./App.css";
import { useSelector } from "react-redux";
// import {
//   showLavender,
//   showSkyBlue,
//   showLemonYellow,
//   showCoral,
// } from "./action/ShowColor";
import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const colorValue = useSelector((state) => state.color);
  const handleChange = (event) => {
    setColor(event.target.value);
    dispatch({
      type: "CHANGE_COLOR",
      payload: event.target.value,
    });
  };
  return (
    <div className="App">
      <h2>Your favorite color is {colorValue}</h2>
      <input
        type="checkbox"
        name="color"
        value="lavender"
        onClick={handleChange}
      />
      <label>lavender</label>

      <input
        type="checkbox"
        name="color"
        value="sky-blue"
        onClick={handleChange}
      />
      <label>sky blue</label>

      <input
        type="checkbox"
        name="color"
        value="lemon-yellow"
        onClick={handleChange}
      />
      <label>lemon yellow</label>

      <input
        type="checkbox"
        name="color"
        value="coral"
        onClick={handleChange}
      />
      <label>coral</label>
    </div>
  );
}

export default App;
