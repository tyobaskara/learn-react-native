import React, { PureComponent } from 'react';
import { Svg, G, Line, Rect } from 'svgs';
import * as d3 from 'd3';

const GRAPH_MARGIN = 0;
const GRAPH_BAR_WIDTH = 5;
const colors = {
  axis: '#E4E4E4',
  bars: '#15AD13'
};

export default class BarGeneration extends PureComponent {
  render() {
    // Dimensions
    const SVGHeight = 300;
    const SVGWidth = 300;
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;
    const data = this.props.data;

    // X scale point
    const xDomain = data.map(item => item.label);
    const xRange = [0, graphWidth];
    const x = d3
      .scalePoint()
      .domain(xDomain)
      .range(xRange)
      .padding(1);

    // Y scale linear
    const yDomain = [0, d3.max(data, d => d.value.income)];
    const yRange = [0, graphHeight];
    const y = d3
      .scaleLinear()
      .domain(yDomain)
      .range(yRange);

    console.log('-------------');
    console.log('SVGHeight, graphHeight', SVGHeight, graphHeight);
    console.log('SVGWidth, graphWidth', SVGWidth, graphWidth);
    console.log('-------------');
    console.log('xDomain', xDomain);
    console.log('xRange', xRange);
    console.log('-------------');
    data.map(item => {
      console.log('xxxxxxxxxxxxxxx');
      console.log(x(item.label));
      console.log(x(item.label) - GRAPH_BAR_WIDTH / 2);
      console.log('yyyyyyyyyyyyyyy');
      console.log(y(item.value.income));
      console.log(y(item.value.income) * -1);
    });
    console.log('-------------');
    console.log('yDomain', yDomain);
    console.log('yRange', yRange);

    return (
      <Svg width={SVGWidth} height={SVGHeight} style={{backgroundColor: '#f5f5f5'}}>
        <G y={graphHeight}>
          {/* bars */}
          {data.map(item => (
            <Rect
              key={item.label}
              x={x(item.label) - GRAPH_BAR_WIDTH / 2}
              y={y(item.value.income) * -1}
              rx={2.5}
              width={GRAPH_BAR_WIDTH}
              height={y(item.value.income)}
              fill={colors.bars}
            />
          ))}

          {/* bottom axis */}
          <Line
            x1='0'
            y1='2'
            x2={graphWidth}
            y2='2'
            stroke={colors.axis}
            strokeWidth='0.5'
          />
        </G>
      </Svg>
    );
  }
}
