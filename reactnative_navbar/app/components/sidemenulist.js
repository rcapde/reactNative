import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem } from 'react-native-elements';

export default class SideMenuList extends Component{
  constructor(props){
    super(props);
  }
  click(){

  }
  render(){
    const list = [
      {title: 'Item #1', icon: 'av-timer'},
      {title: 'Item #2', icon: 'bluetooth'},
      {title: 'Item #3', icon: 'av-timer'},
      {title: 'Item #4', icon: 'av-timer'},
      {title: 'Item #5', icon: 'av-timer'},
      {title: 'Item #6', icon: 'av-timer'},
      {title: 'Item #7', icon: 'av-timer'},
    ]

    return(
      <View style={{flex: 1, backgroundColor: '#192439', paddingTop: 190}}>
        <List>
          {
            list.map((item, i) => (
              <ListItem
                containerStyle={{backgroundColor:'#354464',}}
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                titleStyle={{fontSize:30,color:'#cdcdcd'}}
                onPress={this.click.bind(this)}
              />
            ))
          }
        </List>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  title:{
    fontSize: 50,
    color:'#fff',
    paddingLeft:40,
  },
  text:{
      fontSize: 50,
      color:'#fff',
    },
});
