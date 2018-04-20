import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from '../config/styles.js';

export default class MyAlbum extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Album</Text>
      </View>
    );
  }
}
