import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../../reducers';

export const Store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// https://github.com/jhen0409/react-native-debugger
