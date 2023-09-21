import React, { useEffect, useState, useCallback } from "react";
import classes from "./SixCases.module.css";

/*

const BaconParagraphs = (props) => {
  const [baconParagraphText, setBaconParagraphText] = useState([]);

  useEffect(() => {
    setBaconParagraphText(
      props.chopBacon.map((piece) => <p key={Math.random()}>{piece}</p>)
    );
  }, [props.chopBacon]); // Props

  return (
    <>
      <p>Number of paragraphs: {baconParagraphText.length}</p>
      {baconParagraphText}
    </>
  );
};

*/
///////////////////////////////////////////////////////////////////////////////////////

// SECTION - Functions

const getCurrentTime = () => {
  const now = new Date();
  const time =
    now.getHours() +
    ":" +
    ("0" + now.getMinutes()).slice(-2) +
    ":" +
    ("0" + now.getSeconds()).slice(-2);
  return time;
};

// SECTION - Components

const ExchangeRate = (props) => {
  const [exchangeRate, setExchangeRate] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const getExchangeRate = async () => {
      // Please don't abuse my personal API key :)
      const response = await fetch(
        "https://api.nomics.com/v1/exchange-rates?key=86983dc29fd051ced016bca55e301e620fcc51c4"
      );
      const data = await response.json();
      console.log(data.find((item) => item.currency === "BTC").rate);
      setExchangeRate(data.find((item) => item.currency === "BTC").rate);
    };
    getExchangeRate();

    // Triggering animation
    setIsAnimated(true);
    const classTimer = setTimeout(() => {
      setIsAnimated(false);
    }, 1500);

    // Clear the timer before setting a new one
    return () => {
      clearTimeout(classTimer);
      setExchangeRate(exchangeRate); // Preventing Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    };
  }, [props.onTime]);
  const priceClasses = isAnimated
    ? `${classes.price} ${classes.heartbeat}`
    : `${classes.price}`;

  return (
    <div className={priceClasses}>
      USD <b>{exchangeRate}</b>
    </div>
  );
};

const SixCases = (props) => {
  /*

  ///  Running once on mount: fetch API data ///

  // useState is needed in order to display the result on the screen
  const [bio, setBio] = useState({});

  // 'async' shouldn't be used in the useEffect callback function because these callbacks are synchronous to prevent race conditions. We need to put the async function inside.
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/1/");
      const data = await response.json();
      console.log(data);
      setBio(data);
    };
    fetchData();
  }, []);
  // Empty dependencies array will make useEffect to run only once at startup because that array never changes

  ///////////////////////////////////////////////////////////////////////////////////////

  /// Running on state change: validating input field ///
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input.length < 5 || /\d/.test(input)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [input]);

    ///////////////////////////////////////////////////////////////////////////////////////

  /// Running on state change: live filtering ///

  const array = [
    { key: "1", type: "planet", value: "Tatooine" },
    { key: "2", type: "planet", value: "Alderaan" },
    { key: "3", type: "starship", value: "Death Star" },
    { key: "4", type: "starship", value: "CR90 corvette" },
    { key: "5", type: "starship", value: "Star Destroyer" },
    { key: "6", type: "person", value: "Luke Skywalker" },
    { key: "7", type: "person", value: "Darth Vader" },
    { key: "8", type: "person", value: "Leia Organa" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [filteredArray, setFilteredArray] = useState(array);

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };
  const inputTypeHandler = (e) => {
    setInputType(e.target.value);
  };

  useEffect(() => {
    setFilteredArray((_) => {
      const newArray = array
        .filter((item) => item.value.includes(inputValue))
        .filter((item) => item.type.includes(inputType));
      return newArray;
    });
  }, [inputValue, inputType]);

  // Prepare array to be rendered
  const listItems = filteredArray.map((item) => (
    <>
      <tr>
        <td style={{ border: "1px solid lightgray", padding: "0 1rem" }}>
          {item.type}
        </td>
        <td style={{ border: "1px solid lightgray", padding: "0 1rem" }}>
          {" "}
          {item.value}
        </td>
      </tr>
    </>
  ));
  ///////////////////////////////////////////////////////////////////////////////////////
  /// Running on props change: update paragraph list on fetched API data update ///

  const [bacon, setBacon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const response = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${e.target.paragraphs.value}&start-with-lorem=1`
    );
    const data = await response.json();
    setIsLoading(false);
    setBacon(data);
  };
    */

  ///////////////////////////////////////////////////////////////////////////////////////

  /// Running on props change: updating fetched API data to get updated BTC price ///

  const [time, setTime] = useState(getCurrentTime());

  // Trigger the update interval on startup (mount)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 3000);
    return () => clearInterval(interval);
  }, []); // Empty dependencies array, so it will run once at mount and keep running 'in the background'

  console.log(time);

  return (
    /*
      <>
      <hr />
      <h2>useEffect use case</h2>
      <h3>Running once on mount: fetch API data</h3>
      <p>Luke Skywalker's bio:</p>
      <pre>{JSON.stringify(bio, null, "\t")}</pre>
    </>
      ///////////////////////////////////////////////////////////////////////////////////////
      <>
      <hr />
      <h2>useEffect use case</h2>
      <h3>Running on state change: validating input field</h3>
      <form>
        <label htmlFor="input">
          Write something (more than 5 non numerical characters is a valid
          input)
        </label>
        <br />
        <input
          type="text"
          id="input"
          autoComplete="off"
          onChange={inputHandler}
          style={{ height: "1.5rem", width: "20rem", marginTop: "1rem" }}
        />
      </form>
      <p>
        <span
          style={
            isValid
              ? { backgroundColor: "lightgreen", padding: ".5rem" }
              : { backgroundColor: "lightpink", padding: ".5rem" }
          }
        >
          {isValid ? "Valid input" : "Input not valid"}
        </span>
      </p>
    </>
    ///////////////////////////////////////////////////////////////////////////////////////
    <>
      <hr />
      <h2>useEffect use case</h2>
      <h3>Running on state change: live filtering</h3>
      <form
        style={{
          maxWidth: "23rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <label htmlFor="input-type">
            Filter by <b>type</b>
          </label>
          <br />
          <input
            type="text"
            id="input-type"
            autoComplete="off"
            onChange={inputTypeHandler}
            style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
          />
        </div>
        <div>
          <label htmlFor="input-value">
            Filter by <b>value</b>
          </label>
          <br />
          <input
            type="text"
            id="input-value"
            autoComplete="off"
            onChange={inputValueHandler}
            style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
          />
        </div>
      </form>
      <br />
      <table
        style={{ width: "20rem", border: "1px solid gray", padding: "0 1rem" }}
      >
        <tr>
          <th>Type</th>
          <th>Value</th>
        </tr>
        {listItems}
      </table>
    </>

    ///////////////////////////////////////////////////////////////////////////////////////

    <>
      <hr />
      <h2>useEffect use case</h2>
      <h3>
        Running on props change: update paragraph list on fetched API data
        update
      </h3>
      <form onSubmit={submitHandler}>
        <label
          htmlFor="paragraphs"
          style={{ display: "block", marginBottom: "1rem" }}
        >
          How many paragraphs of "Bacon ipsum" do you want?
        </label>
        <select id="paragraphs" name="paragraphs">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input
          type="submit"
          value="Show me the bacon!"
          style={{ marginLeft: "1rem" }}
        />{" "}
        {isLoading && <span>Getting paragraphs... 🐷</span>}
      </form>
      <BaconParagraphs chopBacon={bacon} />
    </>
    */
    ///////////////////////////////////////////////////////////////////////////////////////
    <>
      <hr />
      <h2>useEffect use case</h2>
      <h3>
        Running on props change: updating fetched API data to get updated BTC
        price
      </h3>
      <span>Last updated: {time} (polling every 3 seconds)</span>
      <ExchangeRate onTime={time} />
    </>
  );
};

export default SixCases;
