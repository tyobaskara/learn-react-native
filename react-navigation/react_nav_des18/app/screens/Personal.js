import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';

import { personal } from '../config/data';
import { Actions, Header, Info } from '../components/UserDetails';
import colors from '../config/colors';

class Personal extends PureComponent {
	render() {
		return (
			<ScrollView style={{ backgroundColor: colors.background }}>
				<Header {...personal} />
				<Actions {...personal} />
				<Info {...personal} />
			</ScrollView>
		);
	}
}

export default Personal;
