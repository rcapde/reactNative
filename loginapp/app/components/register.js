import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class Register extends Component{
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
      <View style = {styles.container}>
        <View style = {styles.body}>
          <FormLabel labelStyle={{width:200,fontSize:36, color:'#222'}}>Username</FormLabel>
          <FormInput inputStyle={{width:300,height:90,fontSize:36,color:'#222'}} placeholder="Username here"/>

          <FormLabel labelStyle={{width:200,fontSize:36,color:'#222',marginTop:50}}>Password</FormLabel>
          <FormInput inputStyle={{width:300,height:90,fontSize:36,color:'#222'}} placeholder="Password here"/>

          <Button
          buttonStyle={{marginTop:40, width: 400, backgroundColor:"tomato"}}
          fontSize={36}
          raised
          title='REGISTER' />
        <TouchableOpacity onPress={this.navigate.bind(this, 'login')}><Text style={{fontSize:22, marginTop:25}}>Already an acc?. Click here to login.</Text></TouchableOpacity>

        </View>
        <View style = {styles.footer}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f1f1f1',
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
