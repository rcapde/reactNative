import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback,Alert} from 'react-native';
import { Button } from 'react-native-elements'
import * as actions from '../actions';
import { connect } from 'react-redux';

class CheckoutListItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <TouchableWithoutFeedback>
        <View>
          <View style={[styles.container]}>
            <Image style={styles.image}
                    source={require('./react.png')}
            />
          <Text style={{fontSize:40}}>{this.props.library.title}</Text>
            <Button
              buttonStyle={{marginTop:40, width: 140, height:70, backgroundColor:"orange"}}
              fontSize={36}
              raised
              title='unOrder'
              onPress={() => this.props.deleteFromCard(this.props.library.title)}
              />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'#e3e3e3',
    justifyContent:'flex-start',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'red',
  },
  hiddenContainer:{
    flex: 1,
    flexDirection:'row',
    backgroundColor:'crimson',
    justifyContent:'space-around',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'black',
    flexWrap: 'wrap',
  },
  image:{
    width: 120,
    height: 120,
    marginRight:40,
  },
  title:{
    flex:1,
  },
  header: {
    flex:1,
  },
  body: {
    flex: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
  },
});

export default connect(null,actions)(CheckoutListItem)
