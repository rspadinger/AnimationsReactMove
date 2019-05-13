import React from 'react';

const Bar = ({ data, barWidth, containerHeight, animationProps: { barHeight, opacity } }) => {
  return (
    <div>
      <div
        style={{
          marginRight: 10,
          backgroundColor: 'teal',
          opacity: opacity,
          width: barWidth,
          height: barHeight,
          transform: `translate(0, ${containerHeight - barHeight - 20}px)`
        }}
      />

      <label
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
          position: 'absolute',
          top: `${containerHeight - 50}px`,
          marginLeft: 20
        }}
      >
        {barHeight.toFixed(0)}
      </label>

      <label
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          position: 'absolute',
          top: `${containerHeight}px`,
          marginLeft: 10
        }}
      >
        {data.name}
      </label>
    </div>
  );
};

export default Bar;
