import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'
import firebase from 'firebase';

export default class Logged extends Component{
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
          <Text style={{fontSize: 40}}>Benvingut , estas conectat!!</Text>
            <Button onPress={this.navigate.bind(this, 'root')}
              buttonStyle={{marginTop:40, width: 380, backgroundColor:"royalblue"}}
              fontSize={36}
              raised
              title='LOG OUT'
              />
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
