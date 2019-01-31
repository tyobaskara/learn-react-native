import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { BarLine, BarChart } from '../../components/BarChart';

import styles from './styles';

export default class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      { label: 'Jan', value: 500 },
      { label: 'Feb', value: 312 },
      { label: 'Mar', value: 424 },
      { label: 'Apr', value: 745 },
      { label: 'May', value: 89 },
      { label: 'Jun', value: 434 },
      { label: 'Jul', value: 650 },
      { label: 'Aug', value: 980 },
      { label: 'Sep', value: 123 },
      { label: 'Oct', value: 186 },
      { label: 'Nov', value: 689 },
      { label: 'Dec', value: 643 }
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={{padding: 25, backgroundColor: 'white'}}>
          <Text style={styles.welcome}>Bar 1</Text>
          <BarLine />
        </View>
        <Text style={styles.welcome}>Bar 2</Text>
        <BarChart data={data} round={100} unit='€' />
      </View>
    );
  }
}
