import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import firebase from 'firebase';
import Spinner from './spinner';

export default class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
    };
  }

  navigate(routeName){
    this.props.navigator.push({
      name: routeName
    })
  }
  onPress(){
    const { username, password } = this.state;

    this.setState({ error:'', loading: true})

          firebase.auth().createUserWithEmailAndPassword(username ,password)
            .then(this.onLoginSuccess.bind(this, 'logged'))
              .catch(this.onLoginFail.bind(this));
  }

  onLoginFail(){
    this.setState({ error:'Registration Failed', loading:false});
  }
  onLoginSuccess(routeName){
    this.setState({
      email:'',
      password:'',
      loading: false,
      error:'',
    })
    this.props.navigator.push({
      name: routeName,
    })
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner />;
    }
    return (
      <Button
      buttonStyle={{marginTop:40, width: 380, backgroundColor:"crimson"}}
      fontSize={36}
      raised
      title='REGISTER'
      onPress={this.onPress.bind(this)}
      />
    )
  }

  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.body}>
          <FormLabel labelStyle={{width:200,fontSize:36, color:'#222'}}>Username</FormLabel>
          <FormInput inputStyle={{width:300,height:90,fontSize:36,color:'#222'}} placeholder="Username here"
            placeholder={"Mail"}
            value={this.state.username}
            onChangeText={(text)=> this.setState({username: text})}
            />

          <FormLabel labelStyle={{width:200,fontSize:36,color:'#222',marginTop:50}}>Password</FormLabel>
          <FormInput inputStyle={{width:300,height:90,fontSize:36,color:'#222'}}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text)=> this.setState({password: text})}
            placeholder="Password"/>

          <View>
            {this.renderButton()}
          </View>

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
