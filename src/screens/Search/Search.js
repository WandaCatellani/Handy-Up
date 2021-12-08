import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Search() {
  return (
    <View style={style.container}>
      <Text> Search</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});