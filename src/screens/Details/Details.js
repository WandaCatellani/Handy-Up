import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Details() {
  useEffect(() => {
    console.log('Details');
  }, []);
  return (
    <View style={styles.screen}>
      <Text>Details</Text>
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
