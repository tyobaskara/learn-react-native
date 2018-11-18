import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
	const { containerStyle } = styles;

	return <View style={containerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
	containerStyle: {
        backgroundColor: '#fff',
        borderRadius: 2,
        padding: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
        shadowRadius: 2,
		marginLeft: 5,
		marginRight: 5,
        marginTop: 25
	}
});

export { Card };
