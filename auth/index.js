/* eslint-disable import/no-extraneous-dependencies */
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

AppRegistry.registerComponent(appName, () => App);
