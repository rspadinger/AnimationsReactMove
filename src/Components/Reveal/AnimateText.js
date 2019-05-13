import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';

class AnimateText extends React.Component {
  state = { animation: 'zoom' };

  handleAnimation = animation => {
    this.setState({ animation });
  };

  getText = () => {
    return (
      <div
        style={{
          marginTop: '150px',
          fontSize: '25px',
          color: 'teal',
          fontWeight: 'bold'
        }}
      >
        Hello
      </div>
    );
  };

  render() {
    let comp;
    switch (this.state.animation) {
      case 'flip':
        comp = <Flip>{this.getText()}</Flip>;
        break;
      case 'zoom':
        comp = <Zoom>{this.getText()}</Zoom>;
        break;
      case 'bounce':
        comp = <Bounce>{this.getText()}</Bounce>;
        break;
      case 'roll':
        comp = <Roll>{this.getText()}</Roll>;
        break;
      default:
        comp = <Zoom>{this.getText()}</Zoom>;
    }

    return (
      <div>
        <div style={{ width: '300px', display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
          <button onClick={() => this.handleAnimation('flip')}>Flip</button>
          <button onClick={() => this.handleAnimation('zoom')}>Zoom</button>
          <button onClick={() => this.handleAnimation('bounce')}>Bounce</button>
          <button onClick={() => this.handleAnimation('roll')}>Roll</button>
        </div>

        {comp}
      </div>
    );
  }
}

export default AnimateText;
