import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';

import ListItem from '../components/ListItem';

class Contacts extends PureComponent {
  _renderItem = ({ item }) => (
    <ListItem item={item} />
  );

  render() {
    return (
      <FlatList
        style={{ backgroundColor: colors.backgroundColor }}
        data={contacts}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.email}
      />
    )
  }
}

export default Contacts;