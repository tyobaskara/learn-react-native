import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';

// components
import FlatListItem from './FlatListItem';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.employees.length) {
			console.log('nextProps.employees');
			console.log(nextProps.employees);
		}
	}

	renderFlatListItem(library) {
		return <FlatListItem library={library} />;
	}

	render() {
		return (
			<View>
				<FlatList
					style={{ flex: 1 }}
					data={this.props.employees[0]}
					renderItem={this.renderFlatListItem}
					keyExtractor={library => library.name}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
};

export default connect(
	mapStateToProps,
	{ employeesFetch }
)(EmployeeList);
