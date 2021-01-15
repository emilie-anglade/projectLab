import React from "react";

const Checkbox = ({ value, label, id, name, onChange, isChecked }) => {
  const checkbox = {
    "margin-left": "1em"
  }
  return (
    <div key={id}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={isChecked}
      />
      <label style={checkbox} htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;