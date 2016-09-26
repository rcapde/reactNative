import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Compo extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.body}>
          <Text style = {{fontSize:35}}>
            {this.props.name}
          </Text>
        </View>
      </View>
    )
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
  },
});
