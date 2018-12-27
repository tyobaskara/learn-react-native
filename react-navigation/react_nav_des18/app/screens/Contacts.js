import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import _ from 'lodash';

import { contacts } from '../config/data';
import colors from '../config/colors';

import ListItem from '../components/ListItem';

class Contacts extends PureComponent {
  state = {
    counter: 30
  }

  onEndReached = (data) => {
    const { counter } = this.state;

    if(counter < data.length) {
      this.setState({counter: counter + 10})
    }
  }

	_renderItem = ({ item }) => <ListItem item={item} />;

	render() {
		return (
			<FlatList
				style={{ backgroundColor: colors.backgroundColor }}
				data={_.slice(contacts,0 , this.state.counter)}
				renderItem={this._renderItem}
				keyExtractor={item => item.email}
				onEndReached={() => this.onEndReached(contacts)}
				onEndReachedThreshold={0.7}
			/>
		);
	}
}

export default Contacts;
