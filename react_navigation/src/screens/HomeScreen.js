import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
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

export default HomeScreen;