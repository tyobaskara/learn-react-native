import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const iconMenu = Platform.OS === 'ios' ? 'ios-menu' : 'md-menu';

const DrawerButton = ({ navigation }) => {
	return (
		<TouchableOpacity onPress={() => navigation.openDrawer()}>
			<Icon name={iconMenu} size={25} style={styles.iconMenu} />
		</TouchableOpacity>
	);
};

export default DrawerButton;
