import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	console.log('employeeFormReducer actions');
	console.log(action);

	switch (action.type) {
		case EMPLOYEE_UPDATE:
			return {
				...state,
				[action.payload.prop]: action.payload.value
			};
		case EMPLOYEE_CREATE:
			return {
				...state,
				name: action.payload.name,
				phone: action.payload.phone,
				shift: action.payload.shift
			};
		default:
			return state;
	}
};
