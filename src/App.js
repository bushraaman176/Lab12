import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>🚀 My First React App</h1>
      <p>This is a simple deployment-ready React app</p>

      <div className="card">
        <h2>Counter App</h2>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>➕ Increase</button>
        <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
        <button onClick={() => setCount(0)}>🔄 Reset</button>
      </div>
    </div>
  );
}

export default App;