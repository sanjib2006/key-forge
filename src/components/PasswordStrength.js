import React from "react";

const getStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W]/.test(password)) strength++;

    return strength;
};

const PasswordStrength = ({ password }) => {
    const strength = getStrength(password);

    let strengthText = "Weak";
    let strengthColor = "#D32F2F";

    if (strength >= 4) {
        strengthText = "Strong";
        strengthColor = "#4CAF50";
    } else if (strength >= 3) {
        strengthText = "Medium";
        strengthColor = "#FFC107";
    }

    return (
        <div style={{ marginTop: "15px", textAlign: "center" }}>
            <p style={{ fontWeight: "bold", color: strengthColor }}>
                Password Strength: {strengthText}
            </p>
        </div>
    );
};

export default PasswordStrength;
