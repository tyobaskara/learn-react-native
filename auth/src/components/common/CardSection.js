import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = props => {
	const { containerStyle } = styles;

	return <View style={containerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	}
});

export { CardSection };
