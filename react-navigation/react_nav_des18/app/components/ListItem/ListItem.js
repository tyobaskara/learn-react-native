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
    const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';

		return (
			<TouchableHighlight onPress={this.onPress} underlayColor={colors.rowUnderlay}>
				<View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: item.picture.thumbnail
            }}
            resizeMode='cover'
          />
					<View style={styles.textWrapper}>
						<Text style={styles.textTop}>{name}</Text>
						<Text style={styles.email}>{item.email}</Text>
					</View>
					<Icon
						style={{ alignSelf: 'center' }}
						name={iconName}
						color={colors.subtleText}
						size={CHEVRON_SIZE}
					/>
				</View>
			</TouchableHighlight>
		);
	}
}

export default ListItem;
