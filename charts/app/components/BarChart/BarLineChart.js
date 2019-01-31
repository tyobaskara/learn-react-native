import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import { Svg, G, Rect, Line } from 'svgs';

const { width } = Dimensions.get('window');

export default class BarLine extends PureComponent {
  render() {
    const SVGHeight = 150;
    const SVGWidth = width - 75;
    const barWidth = 15;
    const graphHeight = 150;

    return (
      <Svg
        width={SVGWidth}
        height={SVGHeight}
        style={{ backgroundColor: '#fff' }}
      >
        {/* Draw Axis X Line */}
        <Line
          x1='0'
          y1='150'
          x2={width}
          y2='150'
          style={{ stroke: '#f3f3f3', strokeWidth: 4 }}
        />

        {/* translate for 'graphHeight' on y axis */}
        <G y={graphHeight}>
          <Rect
            x='15'
            y='-100'
            width={barWidth}
            height={graphHeight}
            fill='#8fbc5a'
          />
          <Rect
            x='35'
            y='-70'
            width={barWidth}
            height={graphHeight}
            fill='#fc9d13'
          />
        </G>
        <G y={graphHeight}>
          <Rect
            x='60'
            y='-120'
            width={barWidth}
            height={graphHeight}
            fill='#8fbc5a'
          />
          <Rect
            x='80'
            y='-40'
            width={barWidth}
            height={graphHeight}
            fill='#fc9d13'
          />
        </G>

        {/* Draw Line */}
        <Line
          x1='30'
          y1='100'
          x2='80'
          y2='80'
          style={{ stroke: '#00a4de', strokeWidth: 4 }}
        />
      </Svg>
    );
  }
}
