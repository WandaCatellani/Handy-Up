import { Image, StyleSheet, View } from 'react-native';

import React from 'react';

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <Image source={require('../../../assets/gif/spinner.gif')} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default Spinner;
