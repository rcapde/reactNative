import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
//import * as actions from '../actions';
import {StyleSheet, View, Text, TouchableOpacity, Navigator} from 'react-native';
import Navbar from '../components/navbar';
import BotNavbar from '../components/botnavbar';
import {SideMenu,Button} from 'react-native-elements';
import SideMenuList from '../components/sidemenulist';
import First from "../components/first";
import Second from "../components/second";
import Third from "../components/third";
import Fourth from "../components/fourth";

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component{
  constructor () {
    super()
  }
  renderScene(route, navigator){
    if(route.name == "first"){
      return <First navigator={navigator} />
    }
    if(route.name == "second"){
      return <Second navigator={navigator} />
    }
    if(route.name == "third"){
      return <Third navigator={navigator} />
    }
  }

  render(){
    console.log(this.props.toggled)
    return(
      <SideMenu
        MenuComponent={<SideMenuList />}
        toggled={this.props.toggled}
        menuWidth={600}
        >
        <View style={styles.container}>

          <View style={styles.header}>
            <Navbar />
          </View>

          <View style={styles.body}>
            <ScrollableTabView
                initialPage={0}
                tabBarPosition='bottom'
                tabBarTextStyle={{ fontSize: 30 }}
              >
              <First tabLabel="camera" />
              <Second tabLabel="music" />
              <Third tabLabel="calendar" />
              <Fourth tabLabel="comments" />
            </ScrollableTabView>
          </View>
        </View>

      </SideMenu>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#efefef',
    alignItems: 'stretch'
  },
  header: {
    flex:1,
  },
  body: {
    flex: 10,
  },
  footer: {
    flex: 1,
  },
});

function mapStateToProps(state){
  return{
    toggled: state.sideMenuReducer.toggled
  };
}

export default connect(mapStateToProps)(App);
