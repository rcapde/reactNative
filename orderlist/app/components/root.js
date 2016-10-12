import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,TouchableHighlight,Image} from 'react-native';

export default class Root extends Component{
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
      <View style={styles.container} >

        <View style={styles.body}>
        <Image
        style={{
          width: 300,
          height: 300,
        }}
        source={require('./images/pizza.png')}
        />
        <Text style={{fontSize:44,color:'white'}}>-- La Cosa Nostra --</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.menuelements}>
            <TouchableOpacity><Text style={{fontSize:44,color:'white'}} onPress={this.navigate.bind(this, 'list')}> ENTER </Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'tomato',
    alignItems: 'stretch'
  },
  header: {
    flex:1,
  },
  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent:'center',
  },
  footer: {
    flex: 4,
  },
  menuelements:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  }
});
