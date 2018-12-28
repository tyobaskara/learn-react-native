import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';

export default class Header extends PureComponent {
	render() {
		const { picture, name } = this.props;
		const fullName = `${capitalizeFirstLetter(
			name.first
		)} ${capitalizeFirstLetter(name.last)}`;
		console.log(this.props);

		return (
			<View style={styles.headerContainer}>
				<Image source={{ uri: picture.large }} style={styles.image} />
				<Text style={styles.name}>{fullName}</Text>
			</View>
		);
	}
}
