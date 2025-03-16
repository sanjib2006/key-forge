import React from "react";

function PasswordStrengthCheck({ password }) {
  const getStrength = (password) => {
    if (!password) return { strength: "Enter a password", color: "gray" };

    let strengthPoints = 0;
    if (password.length >= 8) strengthPoints++; 
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strengthPoints++; 
    if (/\d/.test(password)) strengthPoints++; 
    if (/[@$!%*?&#]/.test(password)) strengthPoints++; 

    const strengths = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
    const colors = ["red", "orange", "yellow", "lightgreen", "green"];

    return { strength: strengths[strengthPoints], color: colors[strengthPoints] };
  };

  const { strength, color } = getStrength(password);

  return (
    <div>
      <h3>Password Strength: <span style={{ color }}>{strength}</span></h3>
    </div>
  );
}

export default PasswordStrengthCheck;
