import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { CATEGORIES } from '../../data/categories';
import React from 'react';

export default function Home({ navigation }) {
  const handleSelectCategory = (item) => {
    navigation.navigate('Services', {
      name: item.title,
      itemID: item.id,
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => {
          <TouchableOpacity OnPress={() => handleSelectCategory(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>;
        }}
        keyExtractor={(item) => item.id}
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
