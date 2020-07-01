import React from "react";

const ColorValue = (props) => {
  let color, prop1, prop2, prop3;

  if (props.label.toLowerCase() !== "hsl") {
    prop1 = props.colorValue.r;
    prop2 = props.colorValue.g;
    prop3 = props.colorValue.b;
  } else {
    prop1 = props.colorValue.h;
    prop2 = props.colorValue.s;
    prop3 = props.colorValue.l;
  }


  const getHex = (r, g, b) => {
    let hex = "#";

    // Converting to hex value
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    hex += r.length === 1 ? '0' + r : r;
    hex += g.length === 1 ? '0' + g : g;
    hex += b.length === 1 ? '0' + b : b;

    return hex;
  }

  switch (props.label.toLowerCase()) {
    case "rgb":
      color = `rgb(${prop1}, ${prop2}, ${prop3})`;
      break;
    case "hex":
      color = getHex(prop1, prop2, prop3);
      break;
    case "hsl":
      color = `hsl(${prop1}, ${prop2}%, ${prop3}%)`;

  }

  const getStyle = () => ({
    display: "inline-block",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  });

  return (
    <div className="color-value-group">
      <label className="label">{props.label}</label>
      <span className="circle" style={{ backgroundColor: color }}></span>
      <input type="text" readOnly value={color} />
    </div>
  );
};

export default ColorValue;