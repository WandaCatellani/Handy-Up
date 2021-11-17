// import Colors from './src/constants/colors';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
// import Auth from './src/screens/Auth/Auth';
import Header from './src/components/Header/Header';
import Home from './src/screens/Home/index';
import { useFonts } from 'expo-font';

const FONT_DEFAULT = 'Roboto';

export default function App() {
  const [loaded] = useFonts({
    [FONT_DEFAULT]: require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  const [userNumber, setUserNumber] = useState();

  if (!loaded) return <AppLoading />;

  const screen = userNumber ? (
    <Text>Game</Text>
  ) : (
    <Home onStartGame={setUserNumber} />
  );

  return (
    <View style={styles.container}>
      <Header title='Adivina el número' />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
