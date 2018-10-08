import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Left, Right, Body } from 'native-base';

class HeaderCommon extends Component {
    render() {
        const { name } = this.props;
        const { container, textContainer, textStyle } = styles;
    
        return (
            <Header style={container} androidStatusBarColor="black">
                <Left style={{ flex: 1 }} />
                <Body style={textContainer}>
                    <Title style={textStyle}>{name}</Title>
                </Body>
                <Right style={{ flex: 1 }} />
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#333'
    }
});

export { HeaderCommon };