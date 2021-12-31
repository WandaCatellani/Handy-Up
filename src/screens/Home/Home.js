import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardContainer from '../../components/CardContainer/CardContainer';
import CardService from '../../components/CardService/CardService';
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
    navigation.navigate('services', {
      name: item.name,
      itemID: item.id,
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={(data) => (
          <CardContainer>
            <CardService item={data.item} onSelected={handleSelectCategory} />
          </CardContainer>
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
