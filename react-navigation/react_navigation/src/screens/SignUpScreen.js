import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

class SignUpScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Log in" onPress={() => this.props.navigation.navigate('LoginScreen')}></Button>
                <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUpScreen')}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato'
    }
})

export default SignUpScreen;