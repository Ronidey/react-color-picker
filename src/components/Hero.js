import React from "react";
import Ranges from "./Ranges";
import ColorValue from "./ColorValue";
import RandomBtn from "./RandomBtn";

const Hero = (props) => {
  const { r, g, b } = props.rgb;

  const getContrastYIQ = (r, g, b) => {
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
  }

  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: getContrastYIQ(r, g, b)
  }

  return (
    <div className="hero" style={style}>
      <svg viewBox="0 0 24 24" className="smile">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>

      <div className="hero_intro">
        <h1 className="hero_title">Color Picker</h1>
        <h4 className="hero_subtitle">
          We make color picking easy and fun for you :)
        </h4>
      </div>

      {/* Controls */}
      <div className="control-box">
        <RandomBtn generateRandomColor={props.generateRandomColor} />
        <Ranges onChange={props.onChange} value={props.hsl} />
        <ColorValue label="Hex" colorValue={props.rgb} />
        <ColorValue label="RGB" colorValue={props.rgb} />
        <ColorValue label="HSL" colorValue={props.hsl} />
      </div>
    </div>
  );
};

export default Hero;
