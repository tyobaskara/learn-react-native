import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 3;

export default EStyleSheet.create({
	$largeImageSize: imageWidth,
	$smallImageSize: imageWidth / 2,
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
		margin: '$largeImageSize / 3',
		width: '$largeImageSize',
		height: '$largeImageSize',
		alignSelf: 'center',
	},
	label: {
		color: '$white',
		fontSize: 25,
		fontWeight: '500',
		textAlign: 'center',
		letterSpacing: -0.5
	}
});
