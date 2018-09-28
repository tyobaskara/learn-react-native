import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>Welcome to React Native!</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 15
    }
});

export default LoginForm;