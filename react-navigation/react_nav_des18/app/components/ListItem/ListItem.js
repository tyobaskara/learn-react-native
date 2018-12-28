import React, { PureComponent } from 'react';
import { View, Text, TouchableHighlight, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';

class ListItem extends PureComponent {
	onPress = args => {
		console.log(args);
	};

	render() {
		const { item } = this.props;
		const name = `${capitalizeFirstLetter(
			item.name.first
		)} ${capitalizeFirstLetter(item.name.last)}`;

		return (
			<TouchableHighlight onPress={this.onPress}>
				<View style={styles.row}>
					<View style={styles.wrapperImage}>
						<Image
							style={styles.image}
							source={{
								uri: item.picture.thumbnail
							}}
							resizeMode='cover'
						/>
					</View>
					<View style={styles.textWrapper}>
						<Text style={styles.textTop}>{name}</Text>
						<Text style={styles.text}>{item.email}</Text>
					</View>
					<Icon
						style={{ alignSelf: 'center' }}
						name='ios-arrow-forward'
						color='#fff'
						size={25}
					/>
				</View>
			</TouchableHighlight>
		);
	}
}

export default ListItem;
