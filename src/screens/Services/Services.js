import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

export default function Services({ navigation }) {
  useEffect(() => {
    console.log('Services');
  }, []);
  return (
    <View style={styles.screen}>
      <Text>Services</Text>
      <Button
        title='Ir a Details'
        onPress={() => navigation.navigate('Details')}
      />
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
