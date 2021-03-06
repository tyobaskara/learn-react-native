import React from 'react';
import { TextInput, View, Text, StyleSheet, Platform } from 'react-native';

const Input = ({
	label,
	value,
	onChangeText,
	placeholder,
	secureTextEntry
}) => {
	const { containerStyle, labelStyle, inputStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				value={value}
				onChangeText={onChangeText}
				style={[inputStyle, { height: Platform.OS === 'android' ? 40 : 20 }]}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		height: 40
	},
	labelStyle: {
		fontSize: 18,
        flex: 1,
        paddingLeft: 20
	},
	inputStyle: {
		flex: 2,
		borderRadius: 5,
		marginLeft: 10,
		color: '#333',
		fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5
	}
});

export { Input };
