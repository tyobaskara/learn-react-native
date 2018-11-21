import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class FlatListItem extends PureComponent {
	renderDescription = () => {
		const { name, phone, shift } = this.props.library.item;

		return (
			<View>
				<Text>{name}</Text>
				<Text>{phone}</Text>
				<Text>{shift}</Text>
			</View>
		);
	};

	render() {
		return (
			<View>
				{this.renderDescription()}
			</View>
		);
	}
}

export default FlatListItem;
