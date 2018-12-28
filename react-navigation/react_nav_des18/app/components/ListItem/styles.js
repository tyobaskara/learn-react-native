import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const CHEVRON_SIZE = 25;
export default StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: colors.rowUnderlay,
		marginBottom: 5,
		padding: 15
	},
	email: {
		color: colors.subtleText
	},
	textTop: {
		color: colors.primaryText,
		marginBottom: 2,
		fontWeight: '500',
		fontSize: 16,
	},
	wrapperImage: {
		justifyContent: 'center',
		overflow: 'hidden',
		borderRadius: 50
	},
	image: {
		height: 40,
		width: 40,
		borderRadius: 20
	},
	textWrapper: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 10
	}
});
