import React from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';

const FooterCommon = () => {
    return (
        <Footer>
          <FooterTab style={styles.container}>
            <Button full>
              <Text style={styles.textStyle}>Footer</Text>
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
