import React, {Component} from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class First extends Component{
  constructor () {
    super()
  }
  navigate(routeName){
    this.props.navigator.push({
      name: routeName
    })
  }
  render(){
    return(
        <View style={styles.container}>
          <Text>Soc el first ComponentJODEEEEEEEER</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'yellowgreen',
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
