import React, {useState} from "react";
import './App.css';


const App = () => {
  const [hex, setHex] = useState("#ffffff");
  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  
  return <div className="App">
    <h1>{hex}</h1>
  <button onClick={randomizedHex}>Switch Color</button>
  <button onClick={() => navigator.clipboard.writeText(hex)}>
    Copy Copy!
  </button>
  </div>;
};

export default App;
