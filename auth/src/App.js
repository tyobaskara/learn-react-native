import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Container } from 'native-base';
import { Button, Card, CardSection, HeaderCommon } from './components/common';

export default class App extends Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <HeaderCommon name="Auth"/>
        <Card>
          <CardSection>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Welcome to React Native!</Text>
            </View>
          </CardSection>
          <CardSection>
            <Button>Login</Button>
          </CardSection>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 15
  }
});
