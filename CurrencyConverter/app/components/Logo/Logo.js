import React, { Component } from 'react';
import { Text, View, Image, Keyboard, Animated, Platform } from 'react-native';

import Styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
	constructor(props) {
		super(props);

		this.imageWidth = new Animated.Value(Styles.$largeImageSize);
	}

	componentDidMount() {
		let showListener = 'keyboardWillShow';
		let hideListener = 'keyboardWillHide';
		if (Platform.OS === 'android') {
			showListener = 'keyboardDidShow';
			hideListener = 'keyboardDidHide';
		}
		this.keyboardShowListener = Keyboard.addListener(showListener, this._keyboardShow);
		this.keyboardHideListener = Keyboard.addListener(hideListener, this._keyboardHide);
	}

	componentWillUnmount() {
		this.keyboardShowListener.remove();
		this.keyboardHideListener.remove();
	}

	_keyboardShow = () => {
		Animated.timing(this.imageWidth, {
			toValue: Styles.$smallImageSize,
			duration: ANIMATION_DURATION,
		}).start();

		// // if more than 1 use paralel
		// Animated.parallel([
		// 	Animated.timing(this.imageWidth, {
		// 		toValue: Styles.$smallImageSize,
		// 		duration: ANIMATION_DURATION,
		// 	}),
		// 	Animated.timing(this.anotherWidth, {
		// 		toValue: Styles.$smallAnotherImageSize,
		// 		duration: ANIMATION_DURATION,
		// 	})
		// ]).start();
	}

	_keyboardHide = () => {
		Animated.timing(this.imageWidth, {
			toValue: Styles.$largeImageSize,
			duration: ANIMATION_DURATION,
		}).start();
	}

	render() {
		const imageStyle = [
			Styles.imageOverlay,
			{
				width: this.imageWidth,
				height: this.imageWidth
			}
		]

		return (
			<View>
				<View style={Styles.logo}>
					<View style={Styles.backgroundContainer}>
						<Image
							style={Styles.bgImage}
							resizeMode='contain'
							source={require('./images/background.png')}
						/>
					</View>
					<Animated.Image
						style={imageStyle}
						resizeMode='contain'
						source={require('./images/logo.png')}
					/>
				</View>
				<Text style={Styles.label}>Currency Converter</Text>
			</View>
		);
	}
}

export default Logo;
