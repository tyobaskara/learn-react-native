/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		loading: false
	};

	onButtonPress = () => {
		const { email, password } = this.state;
		const _this = this;

		this.setState({ error: '', loading: true });

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				_this.onLoginSuccess();
			})
			.catch(() => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.catch(_this.onLoginFail);
			});
	};

	onLoginSuccess = () => {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	};

	onLoginFail = () => {
		this.setState({ error: 'Authentication Failed', loading: false });
	};

	renderButton = () => {
		if (this.state.loading) {
			return <Spinner size='small' />;
		}

		return <Button onPress={this.onButtonPress}>Login</Button>;
	};

	render() {
		return (
			<View style={{ padding: 10 }}>
				<Card>
					<CardSection>
						<Input
							label='Email'
							placeholder='user@gmail.com'
							value={this.state.email}
							onChangeText={email => this.setState({ email })}
						/>
					</CardSection>

					<CardSection>
						<Input
							secureTextEntry
							label='Password'
							placeholder='password'
							value={this.state.password}
							onChangeText={password => this.setState({ password })}
						/>
					</CardSection>

					<Text style={styles.errorTextStyle}>{this.state.error}</Text>

					<View style={{ flexDirection: 'row' }} >
						{this.renderButton()}
					</View>
				</Card>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 15
	},
	errorTextStyle: {
		fontSize: 15,
		alignSelf: 'center',
        color: 'red',
        marginTop: 15
	}
});

export default LoginForm;
