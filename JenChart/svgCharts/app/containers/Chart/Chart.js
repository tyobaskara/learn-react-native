import React, { PureComponent } from 'react';
import { Dimensions, View, Text, Platform, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

import data from './data';
import {
  AxisGeneration,
  BarGeneration,
  BarLine,
  BarChart
} from '../../components/BarChart';

import JenChart from 'jenchart';

import styles from './styles';

export default class Chart extends PureComponent {
  _onPress = (index, item) => {
    console.log(index, item);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>JenChart Default</Text>
          <JenChart
            data={data.slice(0, 6)}
            onPress={(index, item) => this._onPress(index, item)}
            activeIndex='3'
            platform={Platform.OS}
            svgStyles={{
              backgroundColor: '#fff',
              width: width,
              height: 250
            }}
          />
        </View>

        <Text style={styles.title}>JenChart With Props</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.sectionScroll}
        >
          <JenChart
            activeColor='green'
            activeIndex='0'
            axisColor='lightblue'
            axisLabelColor='brown'
            axisLabelSize='12'
            barColor={{ barLeft: 'green', barRight: 'blue' }}
            circleStyle={{
              r: '5',
              fill: 'red'
            }}
            data={data}
            labelTopStyle={{
              fill: 'red',
              fontSize: '13',
              fontWeight: '600'
            }}
            labelBottomStyle={{
              fill: 'orange',
              fontSize: '13',
              fontWeight: '400'
            }}
            labelBottomPosition={30}
            lineStyle={{
              stroke: 'magenta',
              strokeWidth: 3
            }}
            marginVertical={50}
            onPress={(index, item) => this._onPress(index, item)}
            platform={Platform.OS}
            svgStyles={{
              backgroundColor: '#fff',
              width: 700,
              height: 400
            }}
          />
        </ScrollView>

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
      </ScrollView>
    );
  }
}
