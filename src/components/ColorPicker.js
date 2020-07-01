import React from "react";
import Hero from "./Hero";

const minmax = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.generateRandomColor = this.generateRandomColor.bind(this);
    this.state = {
      hsl: {
        h: minmax(0, 360),
        s: minmax(0, 100),
        l: minmax(0, 100)
      },
      rgb: {
        r: undefined,
        g: undefined,
        b: undefined
      }
    };
  }

  UNSAFE_componentWillMount() {
    const rgb = this.getRGB(this.state.hsl);
    this.setState(() => ({ rgb }))
  }

  componentDidUpdate(props, prevState) {
    const { h: h1, s: s1, l: l1 } = prevState.hsl;
    const { h: h2, s: s2, l: l2 } = this.state.hsl;
    const rgb = this.getRGB(this.state.hsl);

    if (h1 !== h2 || s1 !== s2 || l1 !== l2) {
      this.setState(() => ({ rgb }));
    }
  }

  generateRandomColor() {
    this.setState(() => ({
      hsl: {
        h: minmax(0, 360),
        s: minmax(0, 100),
        l: minmax(0, 100)
      }
    }))
  }

  getRGB({ h, s, l }) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    // return "rgb(" + r + "," + g + "," + b + ")";
    return { r, g, b };
  };

  onChangeHandler(e) {
    const target = e.target;
    const type = target.dataset.type;
    const newHsl = {};

    newHsl[type] = parseInt(target.value, 10);

    this.setState(prevState => {
      const hsl = { ...prevState.hsl, ...newHsl };
      return { hsl }
    });
  }

  render() {
    return (
      <div className="app">
        <Hero
          hsl={this.state.hsl}
          rgb={this.state.rgb}
          onChange={this.onChangeHandler}
          generateRandomColor={this.generateRandomColor}
        />
      </div>
    );
  }
}
