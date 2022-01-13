import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
function Button(props) {
  return (
    <Link className={props.btnStyle} to={props.linkTo}>
      {props.value}
    </Link>
  );
}

export default Button;
