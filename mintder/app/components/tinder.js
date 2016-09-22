'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
      </View>
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text style={styles.text}>No more cards</Text>
      </View>
    )
  }
})


class Tinder extends React.Component{

  handleYup (card) {
    console.log("yeah")
  }
  handleNope (card) {
    console.log("nah")
  }
  cardRemoved (index) {
    console.log(`The index is ${index}`);
  }
  render() {
    const Cards = [
      {name: '1', image: 'http://3.bp.blogspot.com/-IVMFBHt24jQ/UfPX3kSoR-I/AAAAAAAACZI/PzNVpu6gamY/s1600/tumblr_mduu5qyly91retsuyo1_500.jpg'},
      {name: '2', image: 'https://s-media-cache-ak0.pinimg.com/originals/89/36/2f/89362f72ac61b27f14343351e19ecbd8.jpg'},
      {name: '3', image: 'http://cdn.playbuzz.com/cdn/0655670f-1d4f-49eb-829a-2da151a0d1ba/7388a990-8ac6-454f-8aff-4ac16afd8ce0.jpg'},
    ]
    return (
      <SwipeCards
        cards={Cards}
        loop={false}
        containerStyle={styles.bg}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
        yupTextStyle={styles.yupTextStyle}
        nopeTextStyle={styles.nopeTextStyle}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />
    )
  }
}

const styles = StyleSheet.create({
  bg:{
    flex:1,
    backgroundColor:'#f1f1f1',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  yupTextStyle:{
    fontSize:60,
    color:'green',
  },
  nopeTextStyle:{
    fontSize:60,
    color:'red',
  },
  card: {
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 700,
    height: 700,
  },
  text: {
    fontSize: 40,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function mapStateToProps(state){
  return{
    cards: state.cards,
  };
}

export default connect(mapStateToProps)(Tinder);
