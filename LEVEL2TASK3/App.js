import React, { useState } from "react";
import "./App.css";

function Button({ label, onClick }) {
  return (
    <button className="btn" onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

function Display({ value }) {
  return <div className="display">{value}</div>;
}

function App() {
  const [input, setInput] = useState("");

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
     "="
  ];

  return (
    <div className="calculator">
      <h1>Simple React Calculator</h1>
      <Display value={input} />
      <div className="button-container">
        {buttons.map((b) => (
          <Button key={b} label={b} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
