import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState("Anuj");
  const [state, setState] = useState(true);

  useEffect(() => {
    console.log(`mounted`, count);

    return () => {
      console.log(`unmounted`, count);
    };
  }, [count]);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    setCounter(count - 1);
  };

  const updateName = () => {
    setName("Anuj Kumar");
  };

  return (
    <div className="App">
      <button onClick={(e) => setState(!state)}>toggle</button>
      {state ? (
        <>
          <button style={{ marginRight: "10px" }} onClick={decrement}>
            -
          </button>
          <span>{count}</span>
          <button style={{ marginLeft: "10px" }} onClick={increment}>
            +
          </button>
          <br />
          <button onClick={updateName}>{name}</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
