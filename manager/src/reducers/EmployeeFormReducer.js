import {
	EMPLOYEE_RESET,
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOOYEE_SAVE_SUCCESS
} from '../actions/types';

const initialState = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case EMPLOYEE_UPDATE:
			return {
				...state,
				[action.payload.prop]: action.payload.value
			};
		case EMPLOYEE_CREATE:
			return initialState;
		case EMPLOOYEE_SAVE_SUCCESS:
			return initialState;
		case EMPLOYEE_RESET:
			return initialState;
		default:
			return state;
	}
};
