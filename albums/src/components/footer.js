import React from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const FooterCommon = () => {
    return (
        <Footer>
          <FooterTab style={styles.container}>
            <Button full>
                <Icon name="home" size={25} color="#333" />
            </Button>
          </FooterTab>
          <FooterTab style={styles.container}>
            <Button full>
                <Icon name="money" size={25} color="#333" />
            </Button>
          </FooterTab>
        </Footer>
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

export default FooterCommon;
