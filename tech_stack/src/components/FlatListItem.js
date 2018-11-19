/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import {
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	LayoutAnimation,
	UIManager,
	Platform
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class FlatListItem extends PureComponent {
	constructor() {
		super();

		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental &&
				UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription = () => {
		const { library, expanded } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1, paddingLeft: 15, paddingRight: 15 }}>
						test
						{library.item.description}
					</Text>
				</CardSection>
			);
		}
	};

	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library.item;

		return (
			<View>
				<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
					<View>
						<CardSection>
							<Text style={titleStyle}>{title}</Text>
						</CardSection>
						{this.renderDescription()}
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
});

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.item.id;

	return { expanded }; // expanded : expanded
};

export default connect(
	mapStateToProps,
	actions
)(FlatListItem);
