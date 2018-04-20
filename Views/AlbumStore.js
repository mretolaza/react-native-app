import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import styles from '../config/styles.js';
//Services
import footballApi from '../services/football-api';
//Components
import Country from '../components/Country';

export default class AlbumStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      isLoading: true,
    }
  }

  onPressCountry(id) {
    footballApi.saveCountry(id);
    alert(id);
  }

  componentDidMount() {
    const worldCupId = 467;
    footballApi.getTeamsByCompetition(worldCupId).then((teams) => {
      this.setState({
        teams,
        isLoading: false
      })
    });
  }

  renderTeams() {
    const { teams } = this.state;
    return (
      <View>
        <FlatList
          data={teams.teams}
          renderItem={({ item }) => { 
            return (<Country name={item.name} image={item.crestUrl} onPressCountry={() => this.onPressCountry(item.name)} />);
          }} />
      </View>
    );
  }

  renderLoading() {
    return (
      <View style={localStyles.loadingStyle}>
        <Text style={localStyles.loadingText}> Loading... </Text>
      </View>
    )
  }

  render() {
    const {
      isLoading
    } = this.state;

    return (isLoading) ? this.renderLoading() : this.renderTeams();
  }
}

const localStyles = StyleSheet.create({
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    color: '#000000',
    fontSize: 26
  }
});