import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, Navigator } from 'react-native';
import Login from '../components/login';
import Register from '../components/register';
import Header from '../components/header';
import Root from '../components/root';
import firebase from 'firebase';
import Logged from '../components/logged';
import Spinner from '../components/spinner';

class App extends Component{

  state = { loggedIn: null};

  componentWillMount(){
    // Initialize Firebase
    firebase.initializeApp ({
      apiKey: "AIzaSyBubMSBXxQs5bE7oPQpVhODfHcDSakAqpY",
      authDomain: "loginapp-aa04f.firebaseapp.com",
      databaseURL: "https://loginapp-aa04f.firebaseio.com",
      storageBucket: "loginapp-aa04f.appspot.com",
      messagingSenderId: "88313575311"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn:true});
      } else {
        this.setState({loggedIn:false});
      }
    });
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
        return <Logged />;
      case false:
        return <Login />;
      default:
        return <Spinner />;
    }
  }

  renderScene(route, navigator){
    if(route.name == 'root') {
      return <Root navigator={navigator} />;
    }
    if(route.name == 'login') {
      return <Login navigator={navigator} />;
    }
    if(route.name == 'register') {
      return <Register navigator={navigator} />;
    }
    if(route.name == 'logged') {
      return <Logged navigator={navigator} />;
    }
  }
  render(){
    return(
        <View style={styles.container}>
            <Navigator
              initialRoute={{name: 'root'}}
              renderScene={this.renderScene.bind(this)}
              />
        </View>
    );
  }
}
//{this.renderContent()}
const styles = StyleSheet.create({
container: {
  flex: 1,
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
/*
*/
function mapStateToProps(state){
  return{
    data: state.dataReducer
  };
}

export default connect(mapStateToProps)(App);
