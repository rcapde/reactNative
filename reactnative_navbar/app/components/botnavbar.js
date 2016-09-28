import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigatee } from '../actions/navigatee';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class BotNavbar extends Component{
  constructor(props){
    super(props);
  }

  navigate(routeName){
    this.props.navigator.push({
      name: routeName
    })
  }

  render(){
    return(
      <View style={[styles.menuContainer]}>
        <TouchableOpacity activeOpacity={0.6}
          onPress={this.navigate.bind(this, 'first')}
          >
          <Icon name='camera' size={36} color={"#222"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigate.bind(this, 'second')}>
          <Text> JAJAJJAJAJA </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <Icon name='comments' size={36} color={"#222"} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name='music' size={36} color={"#222"} />
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  title:{
    fontSize: 50,
    color:'#333',
  },
  menuContainer: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection:'row',
    borderTopWidth:1,
    borderTopColor:'#999',
  },
});
