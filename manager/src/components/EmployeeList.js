import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';

// components
import FlatListItem from './FlatListItem';

class EmployeeList extends PureComponent {
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
		console.log('renderrrr');
		return <FlatListItem library={library} />;
	}

	render() {
		return (
			<View>
				<FlatList
					data={this.props.employees}
					renderItem={this.renderFlatListItem}
					keyExtractor={library => library.uid}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees.data, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
};

export default connect(
	mapStateToProps,
	{ employeesFetch }
)(EmployeeList);
