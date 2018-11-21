import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const initialState = { data: {} };

export default (state = initialState, action) => {
	switch (action.type) {
		case EMPLOYEES_FETCH_SUCCESS:
			return { data: action.payload };
		default:
			return state;
	}
};
