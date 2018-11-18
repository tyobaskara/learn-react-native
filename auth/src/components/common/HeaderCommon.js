import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Left, Right, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

class HeaderCommon extends Component {
	render() {
		const { name, loggedIn } = this.props;
		const { container, textStyle } = styles;

		return (
			<Header style={container} androidStatusBarColor='black'>
				<Left>
					<Icon
						style={{ margin: 10 }}
						name='git-square'
						size={25}
						color='#333'
					/>
				</Left>
				<Body>
					<Title style={textStyle}>{name}</Title>
				</Body>
				<Right>
					{loggedIn && (
						<Icon
							onPress={() => firebase.auth().signOut()}
							style={{ margin: 10 }}
							name='sign-out'
							size={25}
							color='#333'
						/>
					)}
				</Right>
			</Header>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF'
	},
	textStyle: {
		color: '#333'
	}
});

export { HeaderCommon };
