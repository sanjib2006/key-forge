import React from "react";

function PasswordLength({ length, setLength }) {
  return (
    <div className="length">
      <label>
        Password Length: 
        <span style={{ marginRight: "10px" }}></span>
        <input type="number" min="6" max="20" value={length} onChange={(e) => setLength(Number(e.target.value))} />
      </label>
    </div>
  );
}

export default PasswordLength;