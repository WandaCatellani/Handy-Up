import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Orders() {
  return (
    <View style={styles.screen}>
      <Text>Orders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
