import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import HeaderCommon from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <HeaderCommon />
        <Content>
          <AlbumList />
        </Content>
      </Container>
    );
  }
}

