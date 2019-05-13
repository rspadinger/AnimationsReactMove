import React, { Component } from 'react';
import NodeGroup from 'react-move/NodeGroup';
import Bar from './Bar';

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.barIndex = 1;
    this.containerHeight = 300;
    this.containerWidth = 1000;
    this.barWidth = 80;

    this.state = {
      data: this.getInitialData()
    };
  }

  randomNum = () => 40 + Math.floor(160 * Math.random());

  handleUpdate = () => {
    this.setState({
      data: this.getUpdatedData(this.state.data)
    });
  };

  getInitialData = () => {
    let numItems = 10;
    let data = [];
    for (let i = 0; i < numItems; i++) {
      data.push({
        id: 'id-' + this.barIndex,
        value: this.randomNum(),
        name: 'Item ' + this.barIndex
      });
      this.barIndex++;
    }
    return data;
  };

  getUpdatedData = data => {
    let ret = data.map(d => ({ id: d.id, value: this.randomNum(), name: d.name }));
    return ret;
  };

  render() {
    return (
      <div className="container">
        <button style={{ margin: '15px auto', display: 'block' }} onClick={this.handleUpdate}>
          Update Values
        </button>

        <NodeGroup
          data={this.state.data}
          keyAccessor={d => d.name}
          start={i => {
            return { barHeight: 0, x: i * this.barWidth, opacity: 0 };
          }}
          enter={d => {
            return { barHeight: [d.value], opacity: [1], timing: { duration: 250 } };
          }}
          update={d => {
            return { barHeight: [d.value], timing: { duration: 250 } };
          }}
        >
          {nodes => (
            <div style={{ display: 'flex', transform: 'translate(50px, 10px)' }}>
              {nodes.map(({ key, data, state }) => (
                <Bar
                  key={key}
                  data={data}
                  animationProps={state}
                  barWidth={this.barWidth}
                  containerHeight={this.containerHeight}
                />
              ))}
            </div>
          )}
        </NodeGroup>
      </div>
    );
  }
}

export default BarChart;