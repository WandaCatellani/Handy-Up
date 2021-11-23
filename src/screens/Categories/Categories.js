import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

export default function Categories({ navigation }) {
  useEffect(() => {
    console.log('categories');
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Categories</Text>
      <Button
        title='Ir a Servicios'
        onPress={() => navigation.navigate('Services')}
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
