import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class StyleDemo extends React.Component {
  render() {
    return (
      <View>
        <Text style={{color: 'red'}}>Hello World</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.beautiful}>Make me beautiful</Text>
        <Text style={styles.lovely}>Me Too</Text>
        <Text style={styles.pretty}>I am the fairest of them all</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',    //camelCase!
    alignItems: 'center',
    justifyContent: 'center',
  },
  beautiful: {
    flex: 1,
    backgroundColor: 'red',
  },
  lovely: {
    flex: 1,
    backgroundColor: 'white',
  },
  pretty: {
      flex: 1,
      backgroundColor: 'blue',
    },
});

AppRegistry.registerComponent('StyleDemo', () => StyleDemo)
