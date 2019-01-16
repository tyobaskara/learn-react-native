import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
	logo: {
		marginBottom: 20
	},
	backgroundContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	bgImage: {
		flex: 1,
		width: null
	},
	imageOverlay: {
		margin: imageWidth / 7,
		width: imageWidth / 3,
		height: imageWidth / 3,
		alignSelf: 'center',
	},
	label: {
		color: '$white',
		fontSize: 25,
		fontWeight: '500',
		textAlign: 'center'
	}
});
