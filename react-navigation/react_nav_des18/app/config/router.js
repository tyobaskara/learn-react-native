import { createStackNavigator, createAppContainer } from 'react-navigation';

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
      navigationOptions: {
        title: 'Details'
      }
    }
  },
  {
    initialRouteName: "Contacts"
  }
)

export default createAppContainer(ContactsStack);