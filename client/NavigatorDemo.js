import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import ViewDemo from './ViewDemo'
import TextInputDemo from './TextInputDemo'
import StyleDemo from './StyleDemo'


export default class myApp extends React.Component {
  renderScene(route, navigator){  //you would have something in your Components that changes the id with a this.props.navigator.push({id: ""})
    switch(route.id) {
      case 'ViewDemo': return (<ViewDemo title="ViewDemo" navigator={navigator}/>)
      case 'TextInputDemo': return (<TextInputDemo title="TextInputDemo" navigator={navigator}/>)
      case 'StyleDemo': return (<StyleDemo title="StyleDemo" navigator={navigator}/>)
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{id: "ViewDemo"}}
        renderScene={this.renderScene}
        configureScreen={{route, routeStack} => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('myApp', () => myApp)
