import React, { PureComponent } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

// components
import { CardSection } from './common';

class FlatListItem extends PureComponent {
	onRowPress = () => {
		Actions.employeeEdit({ employee: this.props.employee.item });
	}

	renderDescription = () => {
		const { name, phone, shift } = this.props.employee.item;
		const { textStyle } = styles;

		return (
			<TouchableWithoutFeedback onPress={this.onRowPress}>
				<View>
					<CardSection>
						<Text style={textStyle}>{name}</Text>
						<Text style={textStyle}>{phone}</Text>
						<Text style={textStyle}>{shift}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	};

	render() {
		return <View>{this.renderDescription()}</View>;
	}
}

const styles = {
	textStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default FlatListItem;
