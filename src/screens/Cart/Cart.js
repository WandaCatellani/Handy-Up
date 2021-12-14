import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { confirmCart } from '../../../store/actions/cart.actions';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.cart.status);
  const orderID = useSelector((state) => state.cart.orderID);

  const handleConfirmCart = () => {
    dispatch(confirmCart(items));
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.footer}>
        {orderID && <Text>Orden Confirmada: {orderID}</Text>}
        {status === 'loading' ? (
          <ActivityIndicator color='black' size='large' />
        ) : (
          <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
            <Text>Confirm</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    // fontFamily: Roboto,
    padding: 8,
  },
});
