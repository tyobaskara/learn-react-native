import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'lightseagreen',
		marginBottom: 5,
		padding: 15
	},
	text: {
		color: '#fff',
		fontSize: 15
	},
	textTop: {
		color: '#fff',
		marginBottom: 2,
		fontSize: 15,
		fontWeight: 'bold',
	},
	wrapperImage: {
		justifyContent: 'center',
		overflow: 'hidden',
		borderRadius: 50
	},
	image: {
		height: 50,
		width: 50
	},
	textWrapper: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 10
	}
});
