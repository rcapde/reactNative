import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback,Alert} from 'react-native';
import { Button } from 'react-native-elements'
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component{
  constructor(props){
    super(props);
  }

  renderDescription(){
    if (this.props.library.id === this.props.selectedLibraryId){
      return (
        <View style={styles.hiddenContainer}>
          <View style={{flex:1, flexWrap:'wrap'}}>
            <Text style={{fontSize:26,color:'#ddd'}}><Text style={{color:'white'}}>Ingredients: </Text>{this.props.library.ingredient}</Text>
          </View>
          <Button
            buttonStyle={{marginTop:40, width: 140, height:70, backgroundColor:"limegreen"}}
            fontSize={36}
            raised
            title='Order'
            />
        </View>
      );
    }
  }
  render(){
    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}
        >
        <View>
          <View style={styles.container}>
            <Image style={styles.image}
                    source={require('./react.png')}
            />
          <Text style={{fontSize:42}}>{this.props.library.title}</Text>
          </View>
          {this.renderDescription()}
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
    borderColor:'black',
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
    width: 160,
    height: 160,
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

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem)
