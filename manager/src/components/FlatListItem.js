import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FlatListItem extends Component {
    renderDescription = () => {
		const { library } = this.props;

        return <Text style={{ flex: 1, paddingLeft: 15, paddingRight: 15 }}>{library.name}</Text>;
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
