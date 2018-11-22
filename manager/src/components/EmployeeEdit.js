/* eslint-disable no-unused-vars */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';

// components
import { Card, CardSection, Button } from './common';
import EmployeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress = () => {
		const { name, phone, shift } = this.props;

		this.props.employeeSave({
			name,
			phone,
			shift,
			uid: this.props.employee.uid
		});
	};

	render() {
		return (
			<Card>
				<EmployeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress}>Save Changes</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(
	mapStateToProps,
	{ employeeUpdate, employeeSave }
)(EmployeeEdit);
