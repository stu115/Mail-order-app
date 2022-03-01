import React from 'react';
import { FlatList, Text, View } from 'react-native';

export default class Weather extends React.Component {
  componentWillMount(){
    const localAdsData = require('../assets/prod.json');
    this.setState({
          dataSource: localAdsData.products
        })
  }
  
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.desc}, {item.size}</Text>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    )
  }
}
