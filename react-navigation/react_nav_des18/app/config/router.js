import React from 'react';
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator,
	createDrawerNavigator
} from 'react-navigation';
import { Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Personal from '../screens/Personal';

import { capitalizeFirstLetter } from '../helpers/string';

const iconMenu = Platform.OS === 'ios' ? 'ios-menu' : 'md-menu';

const ContactsStack = createStackNavigator({
	Contacts: {
		screen: Contacts,
		navigationOptions: ({ navigation }) => ({
			headerTitle: 'Contacts',
			headerLeft: (
				<TouchableOpacity onPress={() => navigation.openDrawer()}>
					<Icon name={iconMenu} size={25} style={{ marginLeft: 15 }} />
				</TouchableOpacity>
			)
		})
	},
	Details: {
		screen: Details,
		navigationOptions: ({ navigation }) => ({
			headerTitle: `${capitalizeFirstLetter(
				navigation.state.params.name.first
			)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`
		})
	}
});

// export default createAppContainer(ContactsStack);


const NewContactStack = createStackNavigator({
	NewContact: {
		screen: NewContact,
		navigationOptions: ({ navigation }) => ({
			headerTitle: 'New Contact',
			headerLeft: (
				<TouchableOpacity onPress={() => navigation.openDrawer()}>
					<Icon name={iconMenu} size={25} style={{ marginLeft: 15 }} />
				</TouchableOpacity>
			)
		})
	}
});

const PersonalStack = createStackNavigator({
	PersonalStack: {
		screen: Personal,
		navigationOptions: ({ navigation }) => ({
			headerTitle: 'Personal',
			headerLeft: (
				<TouchableOpacity onPress={() => navigation.openDrawer()}>
					<Icon name={iconMenu} size={25} style={{ marginLeft: 15 }} />
				</TouchableOpacity>
			)
		})
	}
});

// TAB NAVIGATOR
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

//export default createAppContainer(Tabs);


// DRAWER NAVIGATOR
const Drawer = createDrawerNavigator({
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

export default createAppContainer(Drawer);
