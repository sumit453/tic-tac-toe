import React from "react";

function Square(props) {
  //   const classes = props.className ? `${props.className} square` : "square";
  return (
    <div>
      <button
        className={props.state ? "btn disabled no-click" : "btn"}
        onClick={props.onclick}
      >
        {props.state}
      </button>
    </div>
  );
}

export default Square;
