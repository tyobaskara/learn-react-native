import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();
	}

	render() {
		return (
			<View>
				<Text>test</Text>
			</View>
		);
	}
}

const mapStateToProps = state => {
	console.log('state');
	console.log(state);
	
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
};

export default connect(
	mapStateToProps,
	{ employeesFetch }
)(EmployeeList);
