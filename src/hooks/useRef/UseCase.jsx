import React, { useEffect, useRef } from "react";

function UseCase() {
  // const inputRef = useRef(null);
  const [count, setCount] = React.useState(0);
  const prevCountRef = useRef();

  ////////////////////////////////////////////////////////////////////////////////
  /*
  // Accessing DOM Elements with useRef

  ///// 1. Reading Input Value /////
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(`Input Value: ${inputRef.current.value}`);
  };

  ///// Focusing on an Input Element /////

  const handleClick = () => {
    inputRef.current.focus();
  };
  */

  ///// Storing Previous State Value /////

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      {/* <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Show Input Value</button> */}

      <p>
        Current count: {count} - Previous count: {prevCountRef.current}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseCase;
