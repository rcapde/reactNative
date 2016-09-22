import React, {Component} from 'react';
import Tinder from './tinder'
import {StyleSheet, Text, View, Image} from 'react-native';
import Navbar from './navbar';
import BtnWrapper from './btnwrapper';

export default class Mintder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header]}>
          <Navbar />
        </View>
        <View style={[styles.cardcontainer]}>
            <Tinder/>
        </View>
        <View style={[styles.footer]}>
          <BtnWrapper />
        </View>
      </View>
    );
  }
  border(color){
    return {
      borderColor: color,
      borderWidth: 4,
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    flex:1,
    backgroundColor:'#fff',
    borderBottomColor: '#2ECC71',
    borderBottomWidth: 2,
  },
  cardcontainer: {
    flex:6,
  },
  footer: {
    flex:2,
    backgroundColor:'#f1f1f1',
  },
});
