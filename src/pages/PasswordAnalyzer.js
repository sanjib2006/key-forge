import React, { useState } from "react";
import PasswordStrength from "../components/PasswordStrengthCheck";
import { Link } from "react-router-dom";

function PasswordAnalyzer() {
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h1>Password Strength Analyzer</h1>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="password-input"
      />
      <PasswordStrength password={password} />
      <Link to="/" className="link-btn">Go Back</Link>
    </div>
  );
}

export default PasswordAnalyzer;
