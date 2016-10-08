import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'

export default class Checkout extends Component{
  constructor(props){
      super(props);
    }
    navigate(routeName){
      this.props.navigator.pop({
        name: routeName
      })
    }
    render(){
      return(
        <View style={styles.container} >
          <View style={styles.body}>
            <Text style={{fontSize: 40}}>CheckoutList</Text>
              <Button onPress={this.navigate.bind(this, 'checkout')}
                buttonStyle={{marginTop:40, width: 380, backgroundColor:"royalblue"}}
                fontSize={36}
                raised
                title='Back'
                />
          </View>

          <View style={styles.footer}>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#f4f4f4',
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
      alignItems:'center',
      justifyContent:'center'
    },
  });
