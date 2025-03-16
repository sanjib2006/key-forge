import React, { useState } from "react";
import PasswordDisplay from "../components/PasswordDisplay";
import Options from "../components/Options";
import PasswordLength from "../components/PasswordLength";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import "../styles.css";
import PasswordStrength from "../components/PasswordStrength";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  return (
    <div className="container">
      <h1>KeyForge - Secure Password Generator</h1>
      <PasswordDisplay password={password} setPassword={setPassword} />
      <PasswordStrength password={password} />
      <Options options={options} setOptions={setOptions} />
      <PasswordLength length={length} setLength={setLength} />
      <Buttons setPassword={setPassword} options={options} length={length} />
      <Link to="/analyzer" className="link-btn">Check Password Strength</Link>
    </div>
  );
}

export default PasswordGenerator;
