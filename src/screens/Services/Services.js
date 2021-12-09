import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';

export default function Services({ route }) {
  const filteredCategoryServices = useSelector(
    (state) => state.services.filteredServices
  );

  const category = useSelector((state) => state.categories.selected);

  console.log(filteredCategoryServices);
  console.log(category);

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
