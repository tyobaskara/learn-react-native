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
import Me from '../screens/Me';

import { capitalizeFirstLetter } from '../helpers/string';

const ContactsStack = createStackNavigator(
	{
		Contacts: {
			screen: Contacts,
			navigationOptions: {
				title: 'Contacts'
			}
		},
		Details: {
			screen: Details,
			navigationOptions: ({ navigation }) => ({
				title: `${capitalizeFirstLetter(
					navigation.state.params.name.first
				)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`
			})
		}
	},
	{
		initialRouteName: 'Contacts'
	}
);

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
		screen: NewContact,
		navigationOptions: {
			tabBarLabel: 'New Contact',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-add' size={25} color={tintColor} />
			)
		}
	},
	Me: {
		screen: Me,
		navigationOptions: {
			tabBarLabel: 'Me',
			tabBarIcon: ({ tintColor }) => (
				<Icon name='ios-contact' size={25} color={tintColor} />
			)
		}
	}
});

// export default createAppContainer(ContactsStack);
export default createAppContainer(Tabs);
