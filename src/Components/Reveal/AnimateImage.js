import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import flower from './flower.jpg';

class AnimateImage extends React.Component {
  state = { animation: 'zoom' };

  handleDirection = animation => {
    this.setState({ animation });
  };

  getImage = () => {
    return (
      <div
        style={{
          marginTop: '50px',
          width: '225px',
          height: '225px',
          backgroundSize: 'contain !important',
          background: `url(${flower}) no-repeat`
        }}
      />
    );
  };

  render() {
    let comp;
    switch (this.state.animation) {
      case 'flip':
        comp = <Flip>{this.getImage()}</Flip>;
        break;
      case 'zoom':
        comp = <Zoom>{this.getImage()}</Zoom>;
        break;
      case 'bounce':
        comp = <Bounce>{this.getImage()}</Bounce>;
        break;
      case 'roll':
        comp = <Roll>{this.getImage()}</Roll>;
        break;
      default:
        comp = <Zoom>{this.getImage()}</Zoom>;
    }

    return (
      <div>
        <div style={{ width: '300px', display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
          <button onClick={() => this.handleDirection('flip')}>Flip</button>
          <button onClick={() => this.handleDirection('zoom')}>Zoom</button>
          <button onClick={() => this.handleDirection('bounce')}>Bounce</button>
          <button onClick={() => this.handleDirection('roll')}>Roll</button>
        </div>

        {comp}
      </div>
    );
  }
}

export default AnimateImage;
