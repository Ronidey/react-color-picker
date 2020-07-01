import React from "react";
import Range from "./Range";

const Ranges = props => {
  return (
    <React.Fragment>
      <Range
        label="Hue"
        className="hue-range"
        min="0"
        max="360"
        value={props.value.h}
        type="h"
        onChange={props.onChange}
      />
      <Range
        label="Saturation"
        className="saturation-range"
        value={props.value.s}
        type="s"
        onChange={props.onChange}
      />
      <Range
        label="Lightness"
        className="lightness-range"
        value={props.value.l}
        type="l"
        onChange={props.onChange}
      />
    </React.Fragment>
  );
}

export default Ranges;
