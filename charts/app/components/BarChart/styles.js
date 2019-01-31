import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
  container: {
    height: 250,
    width: width,
    backgroundColor: '#323232'
  }
});
