import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../../constants/colors';
import React from 'react';

// import { Ionicons } from '@expo/vector-icons';

const CardService = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.card}>
        <View>
          <Image
            source={{ uri: 'https://placekitten.com/900/700' }}
            style={styles.image}
          />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 5,
  },
  textContainer: {
    width: 180,
  },
  textName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
});

export default CardService;
