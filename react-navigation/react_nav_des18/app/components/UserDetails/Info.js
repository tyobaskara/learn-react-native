import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from './styles';
import Row from './Row';
import { capitalizeFirstLetter } from '../../helpers/string';

export default class Info extends PureComponent {
	render() {
		const { login, dob, location, registered } = this.props;
		return (
			<View style={styles.infoContainer}>
				<Row
          label="city"
          body={capitalizeFirstLetter(location.city)}
        />
				<Row
          label="birthday"
          body={moment(dob).format('MMMM Do, YYYY')}
        />
				<Row
          label="registered"
          body={moment(registered).format('MMMM Do, YYYY')}
        />
				<Row
          label="username"
          body={login.username}
        />
			</View>
		);
	}
}
