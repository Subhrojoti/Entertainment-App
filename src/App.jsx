
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignUp from "./components/LoginSignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
