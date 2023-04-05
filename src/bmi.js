import { useMemo, useState } from "react";
//import "./styles.css";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

export default function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
    <center>
      <h1> BMI CALCULATOR</h1>
      <div className="input-section">
        <p class="slider-output"><b>Weight: </b> {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p class="slider-output"><b>Height: </b> {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p><b>Your BMI is</b></p>
        <p className="output">{output}</p>
      </div></center>
    </main>
  );
}