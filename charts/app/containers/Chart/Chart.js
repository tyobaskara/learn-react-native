import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import {
  AxisGeneration,
  BarGeneration,
  BarLine,
  BarChart
} from '../../components/BarChart';

import styles from './styles';

export default class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        label: 'Jan',
        value: {
          income: 500,
          spending: 250
        }
      },
      {
        label: 'Feb',
        value: {
          income: 700,
          spending: 200
        }
      },
      {
        label: 'Mar',
        value: {
          income: 600,
          spending: 350
        }
      },
      {
        label: 'Apr',
        value: {
          income: 550,
          spending: 150
        }
      },
      {
        label: 'May',
        value: {
          income: 500,
          spending: 450
        }
      },
      {
        label: 'Jun',
        value: {
          income: 500,
          spending: 250
        }
      }
      //   { label: 'Jul', value: 650 },
      //   {
      //     label: 'Aug',
      //     value: 500
      //   }
      //   { label: 'Sep', value: 123 },
      //   { label: 'Oct', value: 186 },
      //   { label: 'Nov', value: 689 },
      //   { label: 'Dec', value: 643 }
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>

        <View style={styles.section}>
          <Text style={styles.welcome}>BarChart</Text>
          <BarChart data={data} round={100} unit='€' />
        </View>

        <View style={styles.section}>
          <Text style={styles.welcome}>Bar Generation</Text>
          <BarGeneration data={data} />
        </View>

        <View style={styles.section}>
          <Text style={styles.welcome}>BarLine</Text>
          <BarLine />
        </View>

        <View style={styles.section}>
          <Text style={styles.welcome}>Axis Generation</Text>
          <AxisGeneration />
        </View>
      </View>
    );
  }
}
