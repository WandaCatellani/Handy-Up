import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const CardProfessional = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.serviceItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>

        <View>
          <Text style={styles.details}>$ {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  serviceItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  details: {
    fontSize: 18,
  },
});

export default CardProfessional;
