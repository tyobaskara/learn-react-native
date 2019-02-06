import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import data from './data';
import {
  AxisGeneration,
  BarGeneration,
  BarLine,
  BarChart,
  JenChart
} from '../../components/BarChart';

import styles from './styles';

export default class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>JenChart Default</Text>
          <JenChart data={data.slice(0,6)} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>JenChart With Props</Text>
          <JenChart
            data={data}
            round={100}
            axisColor='red'
            barColor={{ barLeft: 'green', barRight: 'blue' }}
            circleStyle={{
              r: '5',
              fill: 'red'
            }}
            marginVertical={50}
            labelTopStyle={{
              fill: 'red',
              fontSize: '10',
              fontWeight: '600'
            }}
            labelBottomStyle={{
              fill: 'orange',
              fontSize: '10',
              fontWeight: '400'
            }}
            lineStyle={{
              stroke: 'magenta',
              strokeWidth: 3
            }}
            svgStyle={{
              backgroundColor: '#fff',
              height: 400
            }}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>BarChart</Text>
          <BarChart data={data} round={100} unit='€' />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Bar Generation</Text>
          <BarGeneration data={data} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>BarLine</Text>
          <BarLine />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Axis Generation</Text>
          <AxisGeneration />
        </View>
      </View>
    );
  }
}
