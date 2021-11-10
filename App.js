import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Home from './src/screens/Home/Home';
// import Colors from './src/constants/colors';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
