import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }
    render() {
        return (
            <View style={{ padding: 15 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Welcome to React Native!</Text>
                </View>

                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="user@gmail.com"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>

                    <CardSection>
                        <Button>Login</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer: {
        padding: 5,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 25
    },
    textStyle: {
        fontSize: 15
    }
});

export default LoginForm;