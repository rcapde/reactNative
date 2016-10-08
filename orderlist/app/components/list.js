import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ListView} from 'react-native';
import { Button } from 'react-native-elements'
import ListItem from './list_item';
import { connect } from 'react-redux'

class List extends Component{
  constructor(props){
    super(props);
    const array = this.props.data;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {title:'Pizza Fresca',ingredient:'tomatti'},
        {title:'Pizza La Cosa Nostra',ingredient:'uovo'},
        {title:'Pizza Diabolo Rosso',ingredient:'semula'},
        {title:'Pizza paverotti',ingredient:'gran paddano'},
        {title:'Pizza Porca miseria',ingredient:'burro'}
      ]),
    };
  }

  renderFila(library){
    return <ListItem library={library} />;
  }

  navigate(routeName){
    this.props.navigator.push({
      name: routeName
    })
  }
  render(){
    return(
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <ListItem library={rowData}/>}
            />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flex:1,
  },
  body: {
    flex: 10,

  },
  list:{
    flex: 1,
    justifyContent:'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return { data: state.data };
};

export default connect(mapStateToProps)(List)
