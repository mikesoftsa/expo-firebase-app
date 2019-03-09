import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from "./application/AppButton";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <AppButton
           bgColor="rgba(111, 38, 74, 0.7)"
           title="test"
           action={() => console.log(1)}
           iconName="sign-in"
           iconSize={30}
           iconColor="#fff"
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
