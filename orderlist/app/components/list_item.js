import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Image} from 'react-native';

export default class ListItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
          <Text style = {{fontSize:40}}>
            {this.props.library.title}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'blue',
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
