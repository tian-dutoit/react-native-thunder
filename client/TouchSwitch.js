import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TouchSwitchDemo extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.pressed = this.pressed.bind(this)
  }
  pressed () {
    console.log('Well done')
  }

  render () {
    return (
      <View>
        <TouchableHighlight onPress={this.pressed}>
        <View>   //You can turn most things into a button
          <Text>Press Me</Text>
        </View>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('TouchSwitchDemo', () => TouchSwitchDemo)
