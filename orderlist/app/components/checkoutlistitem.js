import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback,Alert} from 'react-native';
import { Button } from 'react-native-elements'
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component{
  constructor(props){
    super(props);
    this.state = {ordered: this.props.ordered};
  }
  ordered(){
    this.setState({ordered: !this.state.ordered})
    this.props.isOrdered(this.state.ordered)
  }
  renderButton(){
    if(!this.state.ordered){
      return(
        <Button
          buttonStyle={{marginTop:40, width: 140, height:70, backgroundColor:"limegreen"}}
          fontSize={36}
          raised
          title='Order'
          onPress={this.ordered.bind(this)}
          />
      );
    }
    if(this.state.ordered){
      return(
        <Button
          buttonStyle={{marginTop:40, width: 140, height:70, backgroundColor:"orange"}}
          fontSize={36}
          raised
          title='unOrder'
          onPress={this.ordered.bind(this)}
          />
      );
    }
  }

  render(){
    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}
        >
        <View>
          <View style={[styles.container,{backgroundColor: this.state.ordered ? 'limegreen' : '#e3e3e3'}]}>
            <Image style={styles.image}
                    source={require('./react.png')}
            />
          <Text style={{fontSize:40}}>{this.props.library.title}</Text>
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

const mapStateToProps = state => {
  return {
    selectedLibraryId: state.selectedLibraryId,
    selectedItem: state.selectedItem
  }
}

export default connect(mapStateToProps, actions)(ListItem)
