import React from 'react';
import AnimateText from './AnimateText';
import AnimateImage from './AnimateImage';

const RevealAnimations = () => {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <AnimateText />
      <AnimateImage />
    </div>
  );
};

export default RevealAnimations;
