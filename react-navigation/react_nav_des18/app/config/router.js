import React from 'react';
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Personal from '../screens/Personal';

import { capitalizeFirstLetter } from '../helpers/string';

const ContactsStack = createStackNavigator({
	Contacts: {
		screen: Contacts,
		navigationOptions: {
			headerTitle: 'Contacts'
		}
	},
	Details: {
		screen: Details,
		navigationOptions: ({ navigation }) => ({
			headerTitle: `${capitalizeFirstLetter(
				navigation.state.params.naPersonal.first
			)} ${capitalizeFirstLetter(navigation.state.params.naPersonal.last)}`
		})
	}
});

const NewContactStack = createStackNavigator({
	NewContact: {
		screen: NewContact,
		navigationOptions: {
			headerTitle: 'New Contact'
		}
	}
});

const PersonalStack = createStackNavigator({
	PersonalStack: {
		screen: Personal,
		navigationOptions: {
			headerTitle: 'Personal'
		}
	}
});

const Tabs = createBottomTabNavigator({
	Contacts: {
		screen: ContactsStack,
		navigationOptions: {
			tabBarLabel: 'Contacts',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-list' size={25} color={tintColor} />
			)
		}
	},
	NewContact: {
		screen: NewContactStack,
		navigationOptions: {
			tabBarLabel: 'New Contact',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-add' size={25} color={tintColor} />
			)
		}
	},
	Personal: {
		screen: PersonalStack,
		navigationOptions: {
			tabBarLabel: 'Personal',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-contact' size={25} color={tintColor} />
			)
		}
	}
});

// export default createAppContainer(ContactsStack);
export default createAppContainer(Tabs);
