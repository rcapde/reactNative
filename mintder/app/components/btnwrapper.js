import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight} from 'react-native';

export default class BtnWrapper extends Component {
  render() {
    return (
      <View style={[styles.btnWrap]}>
        <TouchableHighlight
              underlayColor="transparent"
              style={[styles.btnBack]}
              >
              <Text style={styles.btnBText}>back</Text>
        </TouchableHighlight>
        <TouchableHighlight
              underlayColor="transparent"
              style={[styles.button, styles.btnRed]}
              >
              <Text style={styles.btnRText}>NO</Text>
        </TouchableHighlight>
        <TouchableHighlight
              underlayColor="transparent"
              style={[styles.button, styles.btnGreen]}
              >
              <Text style={styles.btnGText}>YES</Text>
        </TouchableHighlight>
        <TouchableHighlight
              underlayColor="transparent"
              style={styles.btnInfo}
              >
              <Text style={styles.btnIText}>I</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btnBack:{
    borderWidth: 2,
    borderRadius:90,
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:100,
    backgroundColor:'#fff',
    borderColor:'#2ECC71',
    borderWidth:4,
  },
  btnBText: {
    color: 'gold',
    fontSize: 30,
  },
  btnInfo:{
    borderWidth: 2,
    borderRadius:90,
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:100,
    backgroundColor:'#fff',
    borderColor:'#2ECC71',
    borderWidth:4,
  },
  btnIText: {
    color: 'blue',
    fontSize: 30,
  },
  btnGreen:{
    backgroundColor:'#fff',
    borderColor:'#2ECC71',
    borderWidth:4,
  },
  btnRed:{
    backgroundColor:'#fff',
    borderColor:'#2ECC71',
    borderWidth:4,
  },
  btnGText: {
    color: 'green',
    fontSize: 50,
  },
  btnRText:{
    color: 'red',
    fontSize: 50,
  },
  btnWrap: {
    flexDirection:'row',
    alignItems: 'center',
    flex: 1,
    justifyContent:'center',
  },
  button:{
    borderWidth: 2,
    borderRadius:90,
    justifyContent:'center',
    alignItems:'center',
    height:180,
    width:180,
  },
  startbtn:{
    borderColor:'#00CC00',
    borderWidth:5,
  },
  stopbtn:{
    borderColor:'red',
    borderWidth:5,
  },
});
