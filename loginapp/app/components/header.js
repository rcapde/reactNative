import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class Login extends Component{
  constructor(props){
    super(props);
  }
  onChange(){

  }
  render(){
    return(
      <View style={styles.container} >
        <Text>{this.props.actualPage}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ddd',
    alignItems: 'stretch'
  },
  header: {
    flex:1,
  },
  body: {
    flex: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  footer: {
    flex: 2,
  },
});
