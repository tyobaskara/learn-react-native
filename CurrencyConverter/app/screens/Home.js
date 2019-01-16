import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { LastConverted } from '../components/Text';
import { ClearButton } from '../components/Buttons';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
	_handlePressBaseCurrency = () => {
		console.log('press base');
	};

	_handlePressQuoteCurrency = () => {
		console.log('press quote');
	};

	_handleTextChange = () => {
		console.log('_handleTextChange');
	};

	_handleSwapCurrency = () => {
		console.log('_handleSwapCurrency');
	};

	_handleOptionPress = () => {
		console.log('_handleOptionPress');
	};

	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle='light-content' />
				<Header onPress={this._handleOptionPress} />
				<KeyboardAvoidingView behavior="padding">
					<Logo />
					<InputWithButton
						buttonText={TEMP_BASE_CURRENCY}
						onPress={this._handlePressBaseCurrency}
						defaultValue={TEMP_BASE_PRICE}
						keyboardType='numeric'
						onChangeText={this._handleTextChange}
					/>
					<InputWithButton
						buttonText={TEMP_QUOTE_CURRENCY}
						onPress={this._handlePressQuoteCurrency}
						editable={false}
						value={TEMP_QUOTE_PRICE}
					/>
					<LastConverted
						base={TEMP_BASE_CURRENCY}
						quote={TEMP_QUOTE_CURRENCY}
						date={TEMP_CONVERSION_DATE}
						conversionRate={TEMP_CONVERSION_RATE}
					/>
					<ClearButton
						text='Reverse Currencies'
						onPress={this._handleSwapCurrency}
					/>
				</KeyboardAvoidingView>
			</Container>
		);
	}
}

export default Home;
