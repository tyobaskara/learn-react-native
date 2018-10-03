import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Complete Login" onPress={() => this.props.navigation.navigate('DrawerNavigator')}></Button>
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

export default LoginScreen;