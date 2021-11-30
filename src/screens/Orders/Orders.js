import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Orders() {
  useEffect(() => {
    console.log('Orders');
  }, []);

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
