import React, { useState } from "react";

const ControlledCheckbox = ({ checked, onChange }) => {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};

const ParentComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <ControlledCheckbox checked={isChecked} onChange={handleCheckboxChange} />
  );
};

export default ParentComponent;
