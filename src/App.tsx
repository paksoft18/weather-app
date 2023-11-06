// src/App.tsx
import React from "react";
import "./App.scss";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <h1>5-Day Weather Forecast</h1>
      <Weather />
    </div>
  );
}

export default App;
