import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PasswordGenerator from "./pages/PasswordGenerator";
import PasswordAnalyzer from "./pages/PasswordAnalyzer";

function App() {
  return (
    <Router>

        
        <Routes>
          <Route path="/" element={<PasswordGenerator />} />
          <Route path="/analyzer" element={<PasswordAnalyzer />} />
        </Routes>
      
    </Router>
  );
}

export default App;
