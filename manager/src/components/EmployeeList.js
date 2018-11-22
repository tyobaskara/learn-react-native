import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';

// components
import { Spinner } from './common';
import FlatListItem from './FlatListItem';

class EmployeeList extends PureComponent {
	componentWillMount() {
		this.props.employeesFetch();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.employees.length) {
			// console
		}
	}

	renderFlatListItem(employee) {
		return <FlatListItem employee={employee} />;
	}

	render() {
		const { loading } = this.props;

		if (loading) {
			return <Spinner />;
		}
		
		return (
			<View>
				<FlatList
					data={this.props.employees}
					renderItem={this.renderFlatListItem}
					keyExtractor={employee => employee.uid}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const { loading } = state.employees;
	const employees = _.map(state.employees.data, (val, uid) => {
		return { ...val, uid };
	});

	return { employees, loading };
};

export default connect(
	mapStateToProps,
	{ employeesFetch }
)(EmployeeList);
