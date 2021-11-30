import { StyleSheet, Text, View } from 'react-native';

import Login from '../../components/Auth/Login';
import React from 'react';
import Register from '../../components/Auth/Register';

const Auth = () => {
  return (
    <View style={styles.screen}>
      <Text>Auth</Text>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
