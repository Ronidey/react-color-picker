import React from "react";

const RandomBtn = (props) => (
  <div className="btn-wrapper">
    <button className="btn-random" onClick={props.generateRandomColor}>Random</button>
  </div>
);

export default RandomBtn;