import { Button, Image, StyleSheet, Text, View } from 'react-native';

import { Alert } from 'react-native-web';
import React from 'react';
import { logo } from '../../../assets/splash.png';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text>Login o Register</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='email' />
        <TextInput style={styles.textInput} placeholder='password' />

        <Button title='Login' onPress={() => Alert.alert('Button pressed')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   backgroundColor: '#ccc',
  // },
  image: {
    width: 150,
    height: 100,
    justifyContent: 'center',
  },

  textInput: {
    backgroundColor: '#ccc',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#05E895',
  },
  // textInput: {
  //   borderBottomColor: Colors.black,
  //   borderBottomWidth: 1,
  //   width: 200,
  // },
});
