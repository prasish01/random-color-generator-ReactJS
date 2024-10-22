import { useEffect, useState } from "react";
import "./App.css"; 

export default function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    typeOfColor === "rgb" ? handleCreateRgbColor() : handleCreateHexColor();
  }, [typeOfColor]);

  return (
    <div id="app-container" style={{ backgroundColor: color }}>
      <div id="button-container">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="color-info">
        <div className="type-label">
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </div>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
