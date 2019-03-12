import React from 'react';
import { Text } from 'react-native-elements';
import PreLoader from "./application/components/PreLoader";



import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

import GuestNavigation from './application/navigations/guest';
import RestaurantEmpty from "./application/components/Restaurant/RestaurantEmpty";


export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      isLogged: false,
        loaded: false
    }
  }

  async componentDidMount(){
      // firebase.auth().signOut();
    await firebase.auth().onAuthStateChanged((user) => {
        console.log(user);
      if(user !== null){
          this.setState({
              isLogged: true,
              loaded: true
          })
      } else {
          this.setState({
              isLogged: false,
              loaded: true
          })
      }
    })
  }

  render() {
    const { isLogged, loaded } = this.state;

    if( ! loaded){
      return(<PreLoader/>);
    }

    if(isLogged){
      return(<RestaurantEmpty text="No hay restaurantes disponibles"/>);
    }

    return(<GuestNavigation/>);

  }
}
