import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import colors from '../../constants/colors';

const CardService = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.card}>
        <View style={styles.cardImage}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>

        <View>
          <View style={styles.textContainer}>
            <Text style={styles.textName}>{item.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  textContainer: {
    paddingTop: 5,
  },
  textName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: colors.white,
  },
});

export default CardService;
