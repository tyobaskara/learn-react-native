import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import firebase from 'firebase';
import { HeaderCommon, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
	state = {
		loggedIn: null
	};

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBlJL4kBwy-94dgu6oDQL9HQPFjFvnZzMQ',
			authDomain: 'auth-32fb2.firebaseapp.com',
			databaseURL: 'https://auth-32fb2.firebaseio.com',
			projectId: 'auth-32fb2',
			storageBucket: 'auth-32fb2.appspot.com',
			messagingSenderId: '238945406654'
		});

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent = () => {
		switch (this.state.loggedIn) {
			case true:
				return (
					<View style={{ flexDirection: 'row', padding: 15 }}>
						<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
					</View>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner />;
		}
	};

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<HeaderCommon name='Auth' loggedIn={this.state.loggedIn} />
				{this.renderContent()}
			</SafeAreaView>
		);
	}
}
