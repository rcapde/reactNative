import React, {Component} from 'react';

//import * as actions from '../actions';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Third extends Component{
  constructor () {
    super()
  }
  render(){
    return(
        <View style={styles.container}>
          <Text>Soc el Third Component</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'cyan',
    alignItems: 'stretch'
  },
  header: {
    flex:1,
  },
  body: {
    flex: 10,
  },
  footer: {
    flex: 1,
  },
});
