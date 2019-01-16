import React from 'react';
import { Text, View, Image } from 'react-native';

import Styles from './styles';

const Logo = () => (
	<View>
		<View style={Styles.logo}>
			<View style={Styles.backgroundContainer}>
				<Image
					style={Styles.bgImage}
					resizeMode='contain'
					source={require('./images/background.png')}
				/>
			</View>
			<Image
				style={Styles.imageOverlay}
				resizeMode='contain'
				source={require('./images/logo.png')}
			/>
		</View>
		<Text style={Styles.label}>Currency Converter</Text>
	</View>
);

export default Logo;
