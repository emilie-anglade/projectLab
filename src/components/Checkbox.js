import React from "react";

const Checkbox = ({ value, label, id, name, onChange, isChecked }) => {
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
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;