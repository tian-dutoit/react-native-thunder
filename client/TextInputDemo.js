import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TextInputDemo extends React.Component {
  constructor () {
    super()
    this.state = {
      text: ""
    }
    this.textChange = this.textChange.bind(this)
  }

  textChange (value) {   //like the [e.target.name] we have been using
    this.setState({
      text: value
    })
  }

  // You can use onSubmitEditing to only have the function run when you submit

  render () {
    return (
      <View>
        <TextInput
          placeholder="Hello I am a text input"
          value={this.state.text}
          onChangeText={(value) => this.textChange(value)}
           />
      </View>
    );
  }
}

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo)
