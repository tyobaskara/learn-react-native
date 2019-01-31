import React, { PureComponent } from 'react';
import { Svg, G, Rect, Line } from 'svgs';

export default class BarLine extends PureComponent {
  render() {
    const SVGHeight = 150;
    const SVGWidth = null;
    const barWidth = 15;
    const graphHeight = 150;

    return (
      <Svg
        width={SVGWidth}
        height={SVGHeight}
        style={{ backgroundColor: '#323232' }}
      >
        {/* translate for 'graphHeight' on y axis */}
        <G y={graphHeight}>
          <Rect
            x='15'
            y='-100'
            width={barWidth}
            height={graphHeight}
            fill='tomato'
          />
          <Rect
            x='35'
            y='-70'
            width={barWidth}
            height={graphHeight}
            fill='tomato'
          />
        </G>
        <G y={graphHeight}>
          <Rect
            x='60'
            y='-120'
            width={barWidth}
            height={graphHeight}
            fill='tomato'
          />
          <Rect
            x='80'
            y='-40'
            width={barWidth}
            height={graphHeight}
            fill='tomato'
          />
        </G>

        {/* Draw Line */}
        <Line
          x1='30'
          y1='100'
          x2='80'
          y2='80'
          style={{ stroke: '#fff', strokeWidth: 4 }}
        />
      </Svg>
    );
  }
}
