import { Button, Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

// import imagen from './assets/favicon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Coders!</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      {/* <Image source={imagen} /> */}
      <Button title='Click me' color='#000' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8dadc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: { fontSize: 35, fontWeight: 'bold' },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 15,
  },
});
