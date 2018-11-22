import {
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEES_FETCH_LOADING
} from '../actions/types';

const initialState = { data: {}, loading: false };

export default (state = initialState, action) => {
	switch (action.type) {
		case EMPLOYEES_FETCH_LOADING:
			return {
				...state,
				loading: true
			};
		case EMPLOYEES_FETCH_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
