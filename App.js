import React from 'react';

import PreLoader from "./application/components/PreLoader";


import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

import GuestNavigation from './application/navigations/guest';


export default class App extends React.Component {
  render() {
    return (

       <GuestNavigation />

    );
  }
}
