import React from "react";

function Options({ options, setOptions }) {
  const handleChange = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.checked });
  };

  return (
    <div className="options">
      <label>
        <input type="checkbox" name="uppercase" checked={options.uppercase} onChange={handleChange} />
        Uppercase Letters
      </label>
      <label>
        <input type="checkbox" name="lowercase" checked={options.lowercase} onChange={handleChange} />
        Lowercase Letters
      </label>
      <label>
        <input type="checkbox" name="numbers" checked={options.numbers} onChange={handleChange} />
        Numbers
      </label>
      <label>
        <input type="checkbox" name="symbols" checked={options.symbols} onChange={handleChange} />
        Symbols
      </label>
    </div>
  );
}

export default Options;
