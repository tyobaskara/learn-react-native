import React, { PureComponent } from 'react';
import { G, Rect, Svg } from 'svgs';

import styles from './styles';

export default class BarChart extends PureComponent {
  render() {
    const graphHeight = 100;

    return (
      <Svg style={styles.container}>
        <G y={graphHeight}>
          <Rect x='15' y='0' width='20' height='200' fill='tomato' />
        </G>
      </Svg>
    );
  }
}
