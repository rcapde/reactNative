import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ListView} from 'react-native';
import { Button } from 'react-native-elements';
import CheckoutListItem from './checkoutlistitem';
import { connect } from 'react-redux'

class Checkout extends Component{
  constructor(props){
      super(props);

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(this.props.checkoutData),
      };
    }

    renderFila(library){
      return <CheckoutListItem library={library} />;
    }

    navigate(routeName){
      this.props.navigator.pop({
        name: routeName
      })
    }
    render(){
      return(
        <View style={styles.container}>
          <View style={styles.body}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <CheckoutListItem library={rowData}/>}
              />
          </View>
          <View style={styles.footer}>
            <Button onPress={this.navigate.bind(this, 'checkout')}
              buttonStyle={{width: 300,backgroundColor:"royalblue"}}
              fontSize={36}
              raised
              title='Back'
              />
            <Button onPress={this.navigate.bind(this, 'checkout')}
              buttonStyle={{width: 400,backgroundColor:"crimson"}}
              fontSize={36}
              raised
              title='Proceed to checkout'
            />
          </View>
        </View>
      );
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
      flex: 3,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
  });

  const mapStateToProps = state => {
    return { checkoutData: state.checkoutData };
  };

  export default connect(mapStateToProps)(Checkout)
