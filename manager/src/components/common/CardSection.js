import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = props => {
	return (
		<View style={[styles.containerStyle, props.style]}>{props.children}</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
		padding: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	}
});

export { CardSection };
