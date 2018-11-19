/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { FlatList, ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import FlatListItem from './FlatListItem';

class LibraryList extends Component {
	componentWillMount() {
    // ListView
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	renderRow(library) {
    // ListView
		return <ListItem library={library} />;
	}

	renderFlatList(library) {
    // FlatList
		return <FlatListItem library={library} />;
	}

	render() {
		return (
			<View style={{ height: 450, marginTop: 25 }}>
				<Text
					style={{
						textAlign: 'center',
						backgroundColor: '#f5f5f5',
            padding: 10
					}}
				>
					ListView (Deprecated)
				</Text>
				<ListView dataSource={this.dataSource} renderRow={this.renderRow} />

				<Text
					style={{
						textAlign: 'center',
						marginTop: 20,
						backgroundColor: '#f5f5f5',
            padding: 10
					}}
				>
					FlatList (Recommended)
				</Text>
				<FlatList
					data={this.props.libraries}
					renderItem={this.renderFlatList}
					keyExtractor={library => library.id.toString()}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
