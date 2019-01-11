import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';

import Styles from './styles';

const Container = ({ children }) => (
  <SafeAreaView style={Styles.container}>{children}</SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
