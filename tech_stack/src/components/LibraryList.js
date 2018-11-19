/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentDidMount() {
    console.log(this);
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

	render() {
		return (
			<View style={{ height: 400, marginTop: 20 }}>
				<ListView dataSource={this.dataSource} renderRow={this.renderRow} />
			</View>
		);
	}
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
