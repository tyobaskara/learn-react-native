import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'lightseagreen',
		marginBottom: 5,
		padding: 15
	},
	leftContent: { flex: 1, flexDirection: 'row' },
	text: {
		color: '#fff',
		marginBottom: 4,
		fontSize: 15
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
	},
	iconWrapper: { justifyContent: 'center' }
});
