import React from "react";

function PasswordDisplay({ password}) {
  return <input type="text" readOnly value={password} placeholder="Generated Password" />;
}

export default PasswordDisplay;
