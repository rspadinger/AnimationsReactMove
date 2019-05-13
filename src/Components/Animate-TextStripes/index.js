import React from 'react';
import Stripes from './Stripes';
import TextRotate from './TextRotate';

const AnimateTextStripes = () => {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <TextRotate />
      <Stripes />
    </div>
  );
};

export default AnimateTextStripes;
