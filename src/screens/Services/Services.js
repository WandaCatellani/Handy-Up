import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { SERVICES } from '../../data/services';

export default function Services({ route }) {
  const filteredCategoryServices = SERVICES.filter(
    (service) => service.category === route.params.itemID
  );

  console.log(filteredCategoryServices);

  return (
    <View style={styles.screen}>
      <Text>{route.params.name}</Text>
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
