//Importing useRef hook
import { useState, useEffect, useRef } from "react";

/*

function App() {
  const [inputTextValue, setInputTextValue] = useState("");
  const previousValue = useRef("");

  useEffect(() => {
    previousValue.current = inputTextValue;
  }, [inputTextValue]);

  return (
    <>
      <input
        type="text"
        value={inputTextValue}
        onChange={(e) => setInputTextValue(e.target.value)}
        placeholder="Enter Your Full Name"
      />
      <h2>Current Value: {inputTextValue}</h2>
      <h2>Previous Value: {previousValue.current}</h2>
    </>
  );
}

export default App;

*/

/// access a DOM element directly
// useRef() only returns one item. It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).
// The useRef Hook can also be used to keep track of previous state values.

////////////////////////////////////// Get the value of an Input field using a Ref in React //////////////////////////////////////

/*

const App = () => {
  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text" id="message" name="message" />

      <button onClick={handleClick}>Log message</button>
    </div>
  );
};

export default App;

*/

////////////////////////////////////// Click counter //////////////////////////////////////

/*

export default function App() {
  const ref = useRef(0);

  const handleClick = () => {
    ref.current++;

    console.log(`You clicked: ${ref.current} times`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

*/

////////////////////////////////////// A stopwatch //////////////////////////////////////

/*

const App = () => {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime !== 0 && now !== 0) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

*/

//////////////////////////////////////////////////////////////////////////// manipulating the DOM with useRef ////////////////////////////////////////////////////////////////////////////

////////////////////////////////////// Focusing a text input //////////////////////////////////////

/*

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}


*/

////////////////////////////////////// Scrolling an image into view //////////////////////////////////////

/*

function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll("li > img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Tom" />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Maru" />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default CatFriends;

*/

////////////////////////////////////// Get input values on Form submit using a Ref //////////////////////////////////////

/*

const InputForm = () => {
  const firstRef = useRef(null);
  const lastRef = useRef(null);

  const [msg, setmsg] = useState("");

  const handleSubmit = (e) => {
    console.log(`handle submit run`);
    e.preventDefault(); // 👈️ prevent page refresh

    // 👇️ access input values here
    console.log("first 👉️", firstRef.current.value);
    console.log("last 👉️", lastRef.current.value);

    setmsg(`Hey, ${firstRef.current.value}  ${lastRef.current.value}`);

    // 👇️ clear all input values in the form
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          ref={firstRef}
          id="first_name"
          placeholder="First Name"
        />
        <br />

        <input
          type="text"
          name="last_name"
          ref={lastRef}
          id="last_name"
          placeholder="Last Name"
        />
        <br />
        <button type="submit">Submit Form</button>

        <h2>{msg}</h2>
      </form>
    </div>
  );
};

export default InputForm;

*/

////////////////////////////////////// Uncontrolled Components in React //////////////////////////////////////

export default function Uncontrolled() {
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Input value:", inputRef.current.value);
    console.log("Select value:", selectRef.current.value);
    console.log("Checkbox value:", checkboxRef.current.checked);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input type="text" ref={inputRef} />
        </label>
        <label>
          <p>Favorite color:</p>
          <select ref={selectRef}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>
        <label>
          Do you like React?
          <input type="checkbox" ref={checkboxRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
