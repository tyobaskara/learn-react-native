import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Platform, View, StyleSheet } from 'react-native';
import HeaderCommon from './src/components/header';
import FooterCommon from './src/components/footer';

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
          <View >
            <Text>Welcome to React Native!</Text>
            <Text>To get started, edit App.js</Text>
            <Text>{instructions}</Text>
          </View>
        </Content>
        <FooterCommon />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

