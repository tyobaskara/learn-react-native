import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Button, Left, Right, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderCommon = ({ name }) => {
    const { container, textContainer, textStyle } = styles;

    return (
        <Header style={container} androidStatusBarColor="black">
            <Left style={{ flex: 1 }}>
                {/* <Icon style={{ margin: 10 }} name="deviantart" size={25} color="#333" /> */}
            </Left>
            <Body style={textContainer}>
                <Title style={textStyle}>{name}</Title>
            </Body>
            <Right style={{ flex: 1 }}>
                {/* <Icon style={{ margin: 10 }} name="git-square" size={25} color="#333" /> */}
            </Right>
        </Header>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null
    },
    textStyle: {
        color: '#333'
    }
});

export { HeaderCommon };