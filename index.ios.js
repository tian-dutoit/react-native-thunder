import React from 'react';
import {Text, View } from 'react-native';
import ViewDemo from './client/ViewDemo'
import TextInputDemo from './client/TextInputDemo'
import TouchSwitchDemo from './client/TouchSwitchDemo'
import StyleDemo from './client/StyleDemo'


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello I am a native app</Text>
        <ViewDemo message={"I love React Native"}/>  //passing some props to the child component
      </View>
      <View>
        <TouchSwitchDemo />
        <StyleDemo />
        <CameraDemo />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App)
