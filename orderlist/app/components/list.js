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
      dataSource: ds.cloneWithRows(this.props.data),
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
      <View style={styles.container}>
        <View style={styles.body}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <ListItem library={rowData}/>}
            />
        </View>
        <View style={styles.footer}>
          <Button onPress={this.navigate.bind(this, 'checkout')}
            buttonStyle={{width: 300, height:70,backgroundColor:"royalblue"}}
            fontSize={36}
            raised
            title='Checkout'
            />
        </View>
      </View>


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
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return { data: state.data };
};

export default connect(mapStateToProps)(List)
