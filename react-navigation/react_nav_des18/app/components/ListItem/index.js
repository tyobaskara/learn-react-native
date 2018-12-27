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
					<View style={styles.leftContent}>
						<View style={styles.wrapperImage}>
							<Image
								style={styles.image}
								source={{
									uri: item.picture.thumbnail
								}}
								resizeMode='cover'
							/>
						</View>
						<View
							style={styles.textWrapper}
						>
							<Text style={styles.text}>
								{item.name.first} {item.name.last}
							</Text>
							<Text style={styles.text}>{item.email}</Text>
						</View>
					</View>
					<View style={styles.iconWrapper}>
						<Icon name='ios-arrow-forward' color='#fff' size={25} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default ListItem;
