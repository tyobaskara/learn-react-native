import React, { PureComponent } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

class ListItem extends PureComponent {
	onPress = args => {
		console.log(args);
	};

	render() {
		const { item } = this.props;

		return (
			<TouchableWithoutFeedback onPress={this.onPress}>
				<View style={styles.container}>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View
							style={{
								justifyContent: 'center',
								overflow: 'hidden',
								borderRadius: 50,
								marginRight: 10
							}}
						>
							<Image
								style={{
									height: 50,
									width: 50
								}}
								source={{
									uri: item.picture.thumbnail
								}}
								resizeMode='cover'
							/>
						</View>
						<View
							style={{
								flex: 1,
								justifyContent: 'center'
							}}
						>
							<Text style={styles.text}>
								{item.name.first} {item.name.last}
							</Text>
							<Text style={styles.text}>{item.email}</Text>
						</View>
					</View>
					<View style={{ justifyContent: 'center' }}>
						<Icon name='ios-add' color='#fff' size={25} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default ListItem;
