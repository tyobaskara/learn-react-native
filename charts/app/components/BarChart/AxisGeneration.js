import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import { Svg, G, Line } from 'svgs';

const { width } = Dimensions.get('window');
const GRAPH_MARGIN = 20;
const colors = {
  axis: 'red'
};

export default class AxisGeneration extends PureComponent {
  render() {
    const SVGHeight = 300;
    const SVGWidth = 300;
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;

    return (
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight}>
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
