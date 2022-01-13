import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button.js";
import "./content.css";

function Content() {
  return (
    <>
      <div className="content-container">
        <h1>Welcome to Speed Typing</h1>
        <div className="buttons-container">
          <Button linkTo="/learn" value="Learn" btnStyle="btn" />
          <br />
          <Button
            linkTo="/begin-main"
            value="Begin"
            btnStyle="btn transparent"
          />
        </div>
      </div>
    </>
  );
}

export default Content;
