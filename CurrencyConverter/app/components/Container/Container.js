import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Styles from './styles';

const Container = ({ children }) => (
	<SafeAreaView style={Styles.container}>
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={Styles.container}>{children}</View>
		</TouchableWithoutFeedback>
	</SafeAreaView>
);

Container.propTypes = {
	children: PropTypes.any
};

export default Container;
