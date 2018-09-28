import React, { Component } from 'react';
import { Container } from 'native-base';
import firebase from 'firebase';
import { HeaderCommon } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBlJL4kBwy-94dgu6oDQL9HQPFjFvnZzMQ",
      authDomain: "auth-32fb2.firebaseapp.com",
      databaseURL: "https://auth-32fb2.firebaseio.com",
      projectId: "auth-32fb2",
      storageBucket: "auth-32fb2.appspot.com",
      messagingSenderId: "238945406654"
    });
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <HeaderCommon name="Auth" />
        <LoginForm />
      </Container>
    );
  }
}
