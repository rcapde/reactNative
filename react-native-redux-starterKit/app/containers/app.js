import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
//import * as actions from '../actions';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Compo from '../components/compo';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Compo name={this.props.data.name} />
    );
  }
}

function mapStateToProps(state){
  return{
    data: state.dataReducer
  };
}

export default connect(mapStateToProps)(App);
