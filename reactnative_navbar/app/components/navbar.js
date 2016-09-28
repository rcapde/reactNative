import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bindActionCreators } from 'redux';
import { toggle } from '../actions/sidemenu';
import { connect } from 'react-redux';

class Navbar extends Component{
  constructor (props) {
    super(props);
  }

  render(){
    console.log(this.props.toggle)
    return(
      <View style={[styles.menuContainer]}>
        <TouchableOpacity activeOpacity={0.6}
          onPress={this.props.toggle}
          >
          <Icon name='bars' size={36} color={"#00b9ff"} />
        </TouchableOpacity>
        <Text style={styles.title}>Index</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name='search' size={36} color={"#00b9ff"} />
        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  title:{
    fontSize: 50,
    color:'#333',
  },
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#999',
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggle }, dispatch);
}
export default connect(null,mapDispatchToProps)(Navbar);
