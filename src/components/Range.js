import React from "react";

const Range = (props) => {
  return (
    <div className="range-group">
      <label className="label">{props.label}</label>
      <input
        type="range"
        className={props.className}
        min={props.min}
        max={props.max}
        onChange={props.onChange}
        value={props.value}
        data-type={props.type}
      />
    </div>
  );
};

Range.defaultProps = {
  min: 0,
  max: 100
};

export default Range;
