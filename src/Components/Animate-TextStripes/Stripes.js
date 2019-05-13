import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Stripes extends Component {
  state = {
    btnText: 'Leave',
    rotate: 360,
    show: true,
    opacity: 1,
    stripes: [
      {
        background: 'teal',
        left: 0,
        top: 0,
        delay: 0
      },
      {
        background: 'grey',
        left: 15,
        top: 0,
        delay: 200
      },
      {
        background: 'teal',
        left: 30,
        top: 0,
        delay: 400
      }
    ]
  };

  handleUpdate = () => {
    let rotate = 40 + Math.floor(360 * Math.random());
    this.setState({ rotate });
  };

  handleLeave = () => {
    let opacity = this.state.show ? 0 : 1;
    let btnText = this.state.show ? 'Enter' : 'Leave';
    this.setState({ btnText, opacity, show: !this.state.show });
  };

  animateStripes = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={this.state.show}
        start={{
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0
        }}
        enter={{
          background: stripe.background,
          opacity: [this.state.opacity],
          left: [stripe.left],
          rotate: [this.state.rotate],
          top: [stripe.top],
          timing: { delay: stripe.delay, duration: 1000, ease: easePolyOut }
        }}
        update={{
          rotate: [this.state.rotate],
          timing: { delay: stripe.delay, duration: 1000, ease: easePolyOut }
        }}
        leave={{
          opacity: [0],
          timing: { delay: stripe.delay, duration: 1000, ease: easePolyOut }
        }}
      >
        {({ opacity, left, rotate, top, background }) => {
          return (
            <div
              className="stripe"
              style={{
                width: '10px',
                height: '120px',
                position: 'absolute',
                background,
                opacity,
                transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
              }}
            />
          );
        }}
      </Animate>
    ));
  render() {
    return (
      <div>
        <div style={{ width: '250px', display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
          <button onClick={this.handleUpdate}>Animate Stripes</button>
          <button onClick={this.handleLeave}>{this.state.btnText} Stripes</button>
        </div>

        <div style={{ position: 'relative', top: '100px', left: '100px' }}>{this.animateStripes()}</div>
      </div>
    );
  }
}

export default Stripes;
