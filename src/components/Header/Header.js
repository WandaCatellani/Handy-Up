import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36 /* equivale el tamaño del statusBar */,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Roboto',
  },
});

export default Header;
