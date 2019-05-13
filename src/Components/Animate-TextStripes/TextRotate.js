import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class TextRotate extends Component {
  state = { opacity: 1, fontSize: 100, rotate: 360 };

  handleUpdate = () => {
    let fs = 10 + Math.floor(140 * Math.random());
    let op = 0.5 + 0.5 * Math.random();
    let rot = this.state.rotate === 360 ? 0 : 360;
    this.setState({ opacity: op, fontSize: fs, rotate: rot });
  };

  animateText = () => (
    <Animate
      show={true}
      start={{
        rotate: 0,
        opacity: 0,
        fontSize: 0
      }}
      enter={{
        rotate: [360],
        opacity: [1],
        fontSize: [50],
        timing: { duration: 2000, ease: easePolyOut }
      }}
      update={{
        rotate: [this.state.rotate],
        opacity: [this.state.opacity],
        fontSize: [this.state.fontSize],
        timing: { duration: 2000, ease: easePolyOut }
      }}
    >
      {({ opacity, rotate, fontSize }) => {
        return (
          <div
            style={{
              position: 'absolute',
              opacity: opacity,
              transform: `translate(0px,100px) rotateY(${rotate}deg)`,
              fontSize: fontSize,
              color: 'teal'
            }}
          >
            Hello
          </div>
        );
      }}
    </Animate>
  );

  render() {
    return (
      <div>
        <button style={{ margin: '15px auto', display: 'block' }} onClick={this.handleUpdate}>
          Animate Text
        </button>
        {this.animateText()}
      </div>
    );
  }
}

export default TextRotate;
