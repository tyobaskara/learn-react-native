import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		marginBottom: 20
	},
	backgroundContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	},
	bgImage: {
		flex: 1,
		width: null
	},
	imageOverlay: {
		margin: 50,
		width: 100
	},
	label: {
		color: '#fff',
		fontSize: 25,
		fontWeight: '500'
	}
});
