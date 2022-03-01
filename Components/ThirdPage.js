import React, { Component } from 'react';
import { Image } from 'react-native';

export default class ThirdPage extends Component {
  render() {
    let photo = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={photo} style={{width: 300, height: 225}}/>
    );
  }
}