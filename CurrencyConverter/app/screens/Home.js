import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  _handlePressBaseCurrency = () => {
    console.log('press base');
  }

  _handlePressQuoteCurrency = () => {
    console.log('press quote');
  }
  
  _handleTextChange = () => {
    console.log('_handleTextChange');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this._handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this._handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this._handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
      </Container>
    );
  }
};

export default Home;
