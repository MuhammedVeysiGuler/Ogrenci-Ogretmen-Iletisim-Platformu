import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Router from "./src/Router";
import * as firebase from 'firebase';
import '@react-native-firebase/firestore';
export default class App extends React.Component {


  state = {
    loggedIn: false
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "....",
      authDomain: "....",
      databaseURL: "....",
      projectId: "...",
      storageBucket: "...",
      messagingSenderId: "...",
      appId: "...."
    });


    firebase.auth().onAuthStateChanged((user) => {
      switch (user) {
        case true:

        case false:

        default:

      }
    })
  }

  render() {
    return (
      <Router />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});



