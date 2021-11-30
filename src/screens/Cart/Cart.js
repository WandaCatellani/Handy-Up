import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Cart() {
  useEffect(() => {
    console.log('Cart');
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Cart</Text>
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
