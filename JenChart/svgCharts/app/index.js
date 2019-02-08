import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Chart } from './containers/Chart';

EStyleSheet.build({
  // $outline: 1, // debugging styles
  $primaryBlue: '#4F6D9B',
  $white: '#fff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $darkText: '#343434'
});

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Chart />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
