import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { Store } from './config/store';
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
      <Provider store={Store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
