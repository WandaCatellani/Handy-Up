import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import colors from '../../constants/colors';

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.header}>{item.name}</Text>
      </View>

      <View style={styles.detail}>
        <View>
          <Text>Cantidad: {item.quantity}</Text>

          <Text>{item.price}</Text>
        </View>

        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name='trash' size={24} color={colors.accent} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});

export default CartItem;
