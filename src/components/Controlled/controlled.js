// Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior.

import React, { useState, useEffect } from "react";

const ControlledInput = ({ value, onChange }) => (
  <input value={value} onChange={(e) => onChange(e.target.value)} />
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <ControlledInput value={email} onChange={setEmail} placeholder="Email" />
      <ControlledInput
        value={password}
        onChange={setPassword}
        placeholder="Password"
      />
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
