import React from 'react';
import {AppRegistry, Text, View, Image } from 'react-native';

export default class ViewDemo extends React.Component {
  constructor () {
    super()
    this.state = {
      secret: "So cool"
    }
  }
  render () {
    return (
      <View>
        <Text>Hello Harakeke</Text>
        <Text>{this.props.message}</Text>
        <Text>{this.state.secret}</Text>
      </View>
      <View>
        <Image
          source={require('/myFolder/pow.png')}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('ViewDemo', () => ViewDemo)
