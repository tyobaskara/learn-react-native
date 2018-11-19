import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case EMPLOYEE_UPDATE:
            return;
		default:
			return state;
	}
};
