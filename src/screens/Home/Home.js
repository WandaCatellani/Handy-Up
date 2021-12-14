import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from '../../../store/actions/category.actions';
import { useIsFocused } from '@react-navigation/native';

export default function Home({ navigation }) {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log('buscando productos destacados');
    }
  }, [isFocused]);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const handleSelectCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Services', {
      name: item.title,
      itemID: item.id,
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity OnPress={() => handleSelectCategory(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
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
