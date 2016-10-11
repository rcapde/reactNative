import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
//import * as actions from '../actions';
import {StyleSheet, View, Text, TouchableOpacity, Navigator} from 'react-native';
import List from '../components/list';
import Checkout from '../components/checkout';
import Header from '../components/header';

export default class App extends Component{
  constructor(props){
    super(props);
  }
  renderScene(route, navigator){
    if(route.name == 'list') {
      return <List navigator={navigator} />;
    }
    if(route.name == 'checkout') {
      return <Checkout navigator={navigator} />;
    }
  }
  render(){
    return(
        <View style={styles.container}>

          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <Navigator
              initialRoute={{name: 'list'}}
              renderScene={this.renderScene.bind(this)}
              />
          </View>
        </View>
    );
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
    backgroundColor:'#f9f9f9',
    justifyContent:'center',
    alignItems:'center',
  },
  body: {
    flex: 12,
    backgroundColor:'#f1f1f1',
  },
  footer: {
    flex: 2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#298',
  },
});


// const mapStateToProps = state =>{
//   return {data: state.data };
// };
