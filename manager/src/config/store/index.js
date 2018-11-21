/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../../reducers';

export const Store = createStore(
    reducers,
	compose(
		applyMiddleware(ReduxThunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);
