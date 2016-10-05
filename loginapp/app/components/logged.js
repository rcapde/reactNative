import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'
import firebase from 'firebase';

export default class Logged extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container} >
        <Text style={{fontSize: 40}}>Benvingut {this.props.username}, estas conectat!!</Text>
        <Button onPress={() => firebase.auth().signOut()}>Log Out </Button>
      </View>
    );
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
