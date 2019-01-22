import React, { PureComponent } from 'react';
import { Text, FlatList, SafeAreaView, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends PureComponent {
	_renderListItem = item => (
		<ListItem
			selected={item === TEMP_CURRENT_CURRENCY}
			onPress={this.handlePress}
			text={item}
		/>
	);

	handlePress = () => {
		console.log('row press');
	};

	render() {
		return (
			<SafeAreaView>
				<StatusBar barStyle='default' translucent={false} />
				<FlatList
					data={currencies}
					renderItem={({ item }) => this._renderListItem(item)}
					keyExtractor={item => item}
					ItemSeparatorComponent={Separator}
				/>
			</SafeAreaView>
		);
	}
}

export default CurrencyList;
