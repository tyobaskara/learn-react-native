import React, { PureComponent } from 'react';
import { Dimensions, View, Text } from 'react-native';

const { width } = Dimensions.get('window');

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
  _onPress = (index, item) => {
    console.log(index, item);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>JenChart Default</Text>
          <JenChart
            data={data.slice(0, 6)}
            onPress={(index, item) => this._onPress(index, item)}
            activeIndex='3'
            svgStyles={{
              backgroundColor: '#fff',
              width: width,
              height: 250
            }}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>JenChart With Props</Text>
          <JenChart
            activeColor='green'
            activeIndex='0'
            axisColor='red'
            barColor={{ barLeft: 'green', barRight: 'blue' }}
            circleStyle={{
              r: '5',
              fill: 'red'
            }}
            data={data}
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
            marginVertical={50}
            onPress={(index, item) => this._onPress(index, item)}
            svgStyles={{
              backgroundColor: '#fff',
              width: width,
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
