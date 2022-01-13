import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar.js";
import Content from "./components/content.js";
import SpeedType from "./components/speedType.js";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/begin-main" element={<SpeedType />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
