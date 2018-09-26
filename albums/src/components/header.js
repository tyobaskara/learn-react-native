import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

const HeaderCommon = () => {
    return (
        <Header style={styles.container} androidStatusBarColor="black">
            <Left>
                <Button transparent>
                    <Icon style={styles.textStyle} name='menu' />
                </Button>
            </Left>
            <Body>
                <Title style={styles.textStyle}>Header</Title>
            </Body>
            <Right />
        </Header>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF'
    },
    textStyle: {
        color: '#333'
    }
});

export default HeaderCommon;