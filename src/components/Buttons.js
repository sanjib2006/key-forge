import React from "react";

const Buttons = ({ password, setPassword, options, length }) => {  
  const generatePassword = () => {
    let charset = "";
    if (options.uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (options.numbers) charset += "0123456789";
    if (options.symbols) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (!password) return; // Prevent copying empty password
    navigator.clipboard.writeText(password)
      .then(() => alert("Password copied to clipboard!"))
      .catch(err => console.error("Failed to copy: ", err));
  };

  return (
    <div>
      <button onClick={generatePassword}>Generate</button>
      <button onClick={copyToClipboard} disabled={!password}>Copy</button>
    </div>
  );
};

export default Buttons;
