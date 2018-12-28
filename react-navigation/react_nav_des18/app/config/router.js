import { createStackNavigator, createAppContainer } from 'react-navigation';

import { capitalizeFirstLetter } from '../helpers/string';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

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
        title: `${capitalizeFirstLetter(navigation.state.params.name.first)}`
      })
		}
	},
	{
		initialRouteName: 'Contacts'
	}
);

export default createAppContainer(ContactsStack);
