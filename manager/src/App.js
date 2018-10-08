import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBrs-5wMmjChlI6rAfVh4ogc35__uIK6YA',
      authDomain: 'manager-839d6.firebaseapp.com',
      databaseURL: 'https://manager-839d6.firebaseio.com',
      projectId: 'manager-839d6',
      storageBucket: 'manager-839d6.appspot.com',
      messagingSenderId: '90341411667'
    };

    firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});

export default App;