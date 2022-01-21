import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar.js";
import Content from "./components/content.js";
import SpeedType from "./components/speedType.js";

function App() {
  console.log("url:" + process.env.PUBLIC_URL);
  return (
    <div>
      <Router>
        <NavBar />
        {process.env.PUBLIC_URL}
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<Content />} />
          <Route path="/begin-main" element={<SpeedType />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
