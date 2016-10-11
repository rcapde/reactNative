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
        {id:0, title:'Pizza Tonno',ingredient:'Tomate, Mozzarella y Atún '},
        {id:1, title:'Pizza Fresca',ingredient:'Tomate, Mozzarella y Champiñón',image:'./react.png'},
        {id:2, title:'Pizza La Cosa Nostra',ingredient:'Tomate, Mozzarella, Carne picada, Cebolla, Bacon y Piña con el borde relleno de Mozzarella'},
        {id:3, title:'Pizza Diabolo Rosso',ingredient:'Tomate, Mozzarella, Espárragos, Chorizo, Jamón York y Anchoas'},
        {id:4, title:'Pizza paverotti',ingredient:'Tomate, Mozzarella, Jamón York, Champiñón, Huevos y Roquefor'},
        {id:5, title:'Pizza Porca miseria',ingredient:'Tomate, Mozzarella, Parmesano, Gruyere y Roquefort '},
        {id:6, title:'Pizza La Familia',ingredient:'omate, Mozzarella, Jamón York, Anchoas, Champiñón, Alcachofa y Pimiento'},
        {id:7, title:'Pizza Napoli',ingredient:'Tomate, Mozzarella, Jamón York, Salchichas y Patatas fritas'},
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
