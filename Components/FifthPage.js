import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  SectionList,
} from 'react-native';
 
 
 
export default class App extends React.Component {
 
  constructor(props) {
    super(props);
  }

 componentWillMount () {
       const localMovieData = require('../assets/crew members.json');
       this.setState({
          isLoading: false,
          dataSource: localMovieData.movies,
        }, function () {
        });
         }

  _renderItem = (info) => {
    var txt = '  ' + info.item.title;
    return <Text
      style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
  }
 
  _sectionComp = (info) => {
    var txt = info.section.key;
    return <Text
      style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
  }
 
  render() {
    
 
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          sections={this.state.dataSource}
          ItemSeparatorComponent={() => <View><Text></Text></View>}
          ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>Crew Members</Text></View>}
          ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>end</Text></View>}
        />
      </View>
    );
  }
 
}
 
