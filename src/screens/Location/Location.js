import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Location() {
  useEffect(() => {
    console.log('Location');
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Location</Text>
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
