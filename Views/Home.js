import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../config/styles.js';

export default class Home extends Component {
  /*
  static navigationOptions = {
    header: null
  }
  */
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.menuSelect, {backgroundColor: '#c00000'}]}
          onPress={() => navigate('MyAlbum')}
        >
          <Text style={{color: 'white', fontSize: 20}}>My Album</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuSelect, {backgroundColor: '#0000c0'}]}
          onPress={() => navigate('AlbumStore')}
        >
          <Text style={{color: 'white', fontSize: 20}}>Album Store</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
