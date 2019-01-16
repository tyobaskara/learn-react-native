import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
	<TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <Image style={styles.icon} resizeMode='contain' source={require('./images/icon.png')} />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
};

export default ClearButton;
