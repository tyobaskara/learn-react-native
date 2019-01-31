import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import { G, Rect, Svg } from 'svgs';

import EStyleSheet from 'react-native-extended-stylesheet';

const { width } = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    height: 250,
    width: width,
    backgroundColor: '#323232'
  }
});

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
