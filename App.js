import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Views/Home.js';
import AlbumStore from './Views/AlbumStore.js';
import MyAlbum from './Views/MyAlbum.js';

const defaultHeaderStyle = {
  headerStyle: {
    backgroundColor: '#ff4d4d'
  },
  headerTitleStyle: {
    color: '#FFFFFF'
  }
};

const NavigationMap = StackNavigator(
  {
    Home: { 
      screen: Home,
      navigationOptions: {
        headerTitle: 'Welcome',
        ...defaultHeaderStyle
      }
    },
    AlbumStore: { 
      screen: AlbumStore,
      navigationOptions: {
        headerTitle: 'Album Store',
        ...defaultHeaderStyle
      }
    },
    MyAlbum: { 
      screen: MyAlbum,
      navigationOptions: {
        headerTitle: 'My Album',
        ...defaultHeaderStyle
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <NavigationMap /> ;
  }
}