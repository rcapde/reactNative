import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
      <View style={[styles.menu]}>
        <Text style={styles.title}>Mintder</Text>
        <Text style={styles.title}>List</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title:{
    fontSize: 60,
    color:'#2ECC71',
  },
  menu: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection:'row',
  },
});
