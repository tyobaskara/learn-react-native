import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class ScreenOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ScreenOne</Text>
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

export default ScreenOne;