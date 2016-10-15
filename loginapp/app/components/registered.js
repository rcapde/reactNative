import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

export default class Registered extends Component{
  constructor(props){
    super(props);
  }
  navigate(routeName){
    firebase.auth().signOut()
    this.props.navigator.push({
      name: routeName
    })
  }
  render(){
    return(
      <View style={styles.container} >
        <View style={styles.body}>
          <Text style={{fontSize: 40}}>Perfecte, ja estas registrat !!</Text>
            <TouchableOpacity onPress={this.onPress.bind(this)} style={styles.button}><Text style={{fontSize:36, }}>LOGIN</Text></TouchableOpacity>
        </View>

        <View style={styles.footer}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f7f7f7',
    alignItems: 'stretch'
  },
  button: {
    flex: 1,
    backgroundColor:'greenyellow',
    borderRadius:5,
    width: 300,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25,
    elevation:5,
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
    alignItems:'center',
    justifyContent:'center'
  },
});
