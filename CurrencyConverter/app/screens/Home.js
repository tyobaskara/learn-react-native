import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Container } from '../components/Container';

const Home = () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Text>Home</Text>
  </Container>
);

export default Home;
