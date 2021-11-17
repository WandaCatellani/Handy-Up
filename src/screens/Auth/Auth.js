import { Image, StyleSheet, Text, View } from 'react-native';

import Login from '../../components/Auth/Login';
import React from 'react';
import Register from '../../components/Auth/Register';

// const { logo } = require('../../../assets/splash.png');

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <View style={styles.container}>{showLogin ? <Login /> : <Register />}</View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
});
