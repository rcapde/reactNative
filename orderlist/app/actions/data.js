export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBv09caxQgSBcUx1Xg6okQywB3Tx3f1vhY",
  authDomain: "pizzas-90d60.firebaseapp.com",
  databaseURL: "https://pizzas-90d60.firebaseio.com",
  storageBucket: "pizzas-90d60.appspot.com",
  messagingSenderId: "61215388572"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

this.itemsRef = firebaseApp.database().ref();


listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

export function fetchProducts(){
  return{
    type: FETCH_PRODUCTS,
    payload:
  }
}
