import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import firebase from 'firebase';
import Spinner from './spinner';

export default class Login extends Component{
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

    firebase.auth().signInWithEmailAndPassword(username,password)
        .then(this.onLoginSuccess.bind(this, 'logged'))
          .catch(()=>{
          firebase.auth().createUserWithEmailAndPassword(username ,password)
            .then(this.onLoginSuccess.bind(this))
              .catch(this.onLoginFail.bind(this));
        });
  }

  onLoginFail(){
    this.setState({ error:'Authentication Failed', loading:false});
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
      title='LOGIN'
      onPress={this.onPress.bind(this)}
      />
    )
  }

  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.body}>
          <FormLabel labelStyle={{width:200,fontSize:36, color:'#444'}}>Username</FormLabel>
          <FormInput inputStyle={{width:380,height:90,fontSize:36,color:'#222'}}
            placeholder={""}
            value={this.state.username}
            onChangeText={(text)=> this.setState({username: text})}
            />
          <FormLabel labelStyle={{width:200,fontSize:36,color:'#444',marginTop:50}}>Password</FormLabel>
          <FormInput inputStyle={{width:380,height:90,fontSize:36,color:'#222'}}
            placeholder={""}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text)=> this.setState({password: text})}
            />

          <View>
            {this.renderButton()}
          </View>

          <Text style={{fontSize:28, color:'red'}}>
            {this.state.error}
          </Text>
        <TouchableOpacity onPress={this.navigate.bind(this, 'register')}><Text style={{fontSize:28, marginTop:25}}>You dont have an acc?. Click here to register.</Text></TouchableOpacity>
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
