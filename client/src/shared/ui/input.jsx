import CloseCross from "#shared/assets/close-button.jsx";
import React from "react";

import "./input.scss";
function Input({ value, handler, label }) {
  return (
    <div className="input">
      <label htmlFor={label} className="input__label">
        {label}
      </label>
      <input
        type="text"
        id={label}
        onInput={(e) => handler(e.currentTarget.value)}
        placeholder="Start typing"
        className="input__field"
        value={value || ""}
      />
      <button
        type="button"
        onClick={() => handler("")}
        className={`input__clear-button${!value ? " input__clear-button--hidden" : ""}`}
      >
        <CloseCross />
      </button>
    </div>
  );
}

export default Input;
