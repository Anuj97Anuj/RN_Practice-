import React, { useReducer } from "react";
import { loginHelper } from "./LoginHelper";

/*

  // Manage multiple states

const myReducer = (prevState, action) => {
  let newState;
  switch (action.type) {
    case "ADD":
      newState = [...prevState];
      newState.push(action.payload);
      return newState;
    case "REMOVE":
      newState = [...prevState];
      newState.pop();
      return newState;
    case "CLEAR":
      return (newState = []);
    default:
      break;
  }
};
*/
////////////////////////////////////////////////////////////////////////////////

// Handling complex state

const myReducer = (prevState, action) => {
  switch (action.type) {
    case "USERNAME":
      return {
        ...prevState,
        username: action.payload,
      };

    case "PASSWORD":
      return {
        ...prevState,
        password: action.payload,
      };
    case "LOGGED_IN":
      return {
        ...prevState,
        isLoggedIn: true,
      };
    case "LOGGED_OUT":
      return {
        ...prevState,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    case "IS_LOADING":
      return {
        ...prevState,
        isLoading: true,
      };
    case "IS_NOT_LOADING":
      return {
        ...prevState,
        isLoading: false,
      };
    case "ERROR":
      return {
        ...prevState,
        error: true,
        isLoading: false,
      };
    default:
      break;
  }
};

const initialState = {
  username: "anuj20792@gmail.com",
  password: "123456",
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

const UseCases = () => {
  /*
      // Manage multiple states

    const [state, dispatcher] = useReducer(myReducer, ["initialState"]);

    // Three states
    const addHandler = () => {
      dispatcher({ type: "ADD", payload: Math.round(Math.random() * 50 + 1) });
    };

    const removeHandler = () => {
      dispatcher({ type: "REMOVE" });
    };

    const clearHandler = () => {
      dispatcher({ type: "CLEAR" });
    };
    */
  ////////////////////////////////////////////////////////////////////////////////

  // Handling complex state
  const [state, dispatcher] = useReducer(myReducer, initialState);

  const userNameHandler = (e) => {
    dispatcher({ type: "USERNAME", payload: e.target.value });
  };
  const passwordHandler = (e) => {
    dispatcher({ type: "PASSWORD", payload: e.target.value });
  };
  const logoutHandler = (e) => {
    dispatcher({ type: "LOGGED_OUT" });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    // Check credentials (simulated)
    try {
      dispatcher({ type: "IS_LOADING" });
      await loginHelper({ username: state.username, password: state.password });
      dispatcher({ type: "IS_NOT_LOADING" });
      dispatcher({ type: "LOGGED_IN" });
    } catch {
      dispatcher({ type: "ERROR" });
      alert("🚨 Incorrect username or password");
    }
  };
  return (
    /*
      <>
      <hr />
      <h2>useReducer use case</h2>
      <h3>Manage multiple states: modify an array</h3>
      <button onClick={addHandler}>[+] Add random value to array</button>
      <button style={{ margin: "0 2rem" }} onClick={removeHandler}>
        [-] Remove last value from array
      </button>
      <button onClick={clearHandler}>[x] Clear array</button>
      <p>Shopping cart array:</p>
      <p>
        <b>
          {state.length === 0 && "(empty)"}
          {state.join(" - ")}
        </b>
          </p>

      </>
         */

    <>
      <hr />
      <h2>useReducer use case</h2>
      <h3>Modify complex states, such as arrays or objects: login form</h3>
      <div
        style={{
          maxWidth: "50%",
          backgroundColor: "#a8dadc",
          borderRadius: "1rem",
          padding: "2rem",
        }}
      >
        {state.isLoggedIn ? (
          <>
            <p>Welcome!</p>
            <button onClick={logoutHandler}>Log out!</button>
          </>
        ) : (
          <form onSubmit={submitHandler}>
            <div style={{ margin: "1rem 0" }}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={userNameHandler}
                value={state.username}
                style={{ margin: "0 1rem" }}
                placeholder="user"
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={passwordHandler}
                value={state.password}
                style={{ margin: "0 1rem" }}
                placeholder="password"
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <button type="submit" disabled={state.isLoading}>
                {state.isLoading ? "Logging you in..." : "Log in"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default UseCases;
