import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

class CustomTextInput extends PureComponent {
  focus = () => {
    this._input.focus();
  }

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					autoCorrect={false}
					autoCapitalize='none'
					style={styles.input}
          ref={(input) => this._input = input}
					{...this.props}
				/>
			</View>
		);
	}
}

export default CustomTextInput;
