import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardContainer from '../../components/CardContainer/CardContainer';
import CardService from '../../components/CardService/CardService';
import colors from '../../constants/colors';
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
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué necesitas?</Text>

        <FlatList
          style={styles.list}
          numColumns={3}
          data={categories}
          renderItem={(data) => (
            <CardContainer>
              <CardService item={data.item} onSelected={handleSelectCategory} />
            </CardContainer>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    backgroundColor: colors.primary,
  },
  container: {
    height: '100%',
  },
  title: {
    marginHorizontal: 15,
    marginTop: 15,
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  list: {
    width: '100%',
    paddingHorizontal: 50,
  },
});
