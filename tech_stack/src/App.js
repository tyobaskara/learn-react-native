import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { HeaderCommon } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => (
	<Provider store={createStore(reducers)}>
		<View style={{ flex: 1 }}>
			<HeaderCommon name='Tech Stack' />
			<LibraryList />
		</View>
	</Provider>
);

export default App;
