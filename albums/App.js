import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Platform, View, StyleSheet } from 'react-native';
import HeaderCommon from './src/components/header';
import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Container>
        <HeaderCommon />
        <Content contentContainerStyle={styles.container}>
          <View style={styles.textStyle}>
            <Text>Welcome to React Native!</Text>
            <Text>To get started, edit App.js</Text>
            <Text>{instructions}</Text>
          </View>
          <View style={styles.icons}>
            <Icon style={{ margin: 10 }} name="money" size={25} color="#333" />
            <Icon style={{ margin: 10 }} name="rocket" size={25} color="#333" />
            <Icon style={{ margin: 10 }} name="gift" size={25} color="#333" />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  icons: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  textStyle: {
    alignItems: 'center'
  }
});

