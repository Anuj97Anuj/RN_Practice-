import React from "react";
import UserContextProvider from "./UserContextProvider";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <UserContextProvider>
      <h3>Context API</h3>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
