/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { FlatList, ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import FlatListItem from './FlatListItem';

class LibraryList extends Component {
	componentDidMount() {
    console.log('this.props');
		console.log(this.props);
	}

	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	renderRow(library) {
		return <ListItem library={library} />;
  }
  
  renderFlatList(library) {
    return <FlatListItem library={library} />;
  }

	render() {
		return (
			<View style={{ height: 400, marginTop: 20 }}>
				<Text style={{ textAlign: 'center' }}>ListView (deprecated)</Text>
				<ListView dataSource={this.dataSource} renderRow={this.renderRow} />

				<Text style={{ textAlign: 'center' }}>FlatList (recommended)</Text>
        <FlatList 
          data={this.props.libraries}
          renderItem={this.renderFlatList}
          keyExtractor={library => (library.id).toString()}
        />
			</View>
		);
	}
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
