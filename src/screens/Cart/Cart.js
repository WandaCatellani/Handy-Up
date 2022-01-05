import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { confirmCart, removeItem } from '../../../store/actions/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

import CartEmpty from '../../components/CartEmpty/CartEmpty';
import CartItem from '../../components/CartItem/CartItem';
import React from 'react';
import colors from '../../constants/colors';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const status = useSelector((state) => state.cart.status);
  const userId = useSelector((state) => state.auth.userId);

  const handleDeleteItem = (id) => dispatch(removeItem(id));
  const handleConfirmCart = () => {
    dispatch(confirmCart(items, userId));
  };

  const renderItem = (data) => {
    return <CartItem item={data.item} onDelete={handleDeleteItem} />;
  };

  return (
    <>
      <View style={styles.screen}>
        {items.length ? (
          <>
            <View style={styles.list}>
              <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
              />
            </View>

            <View style={styles.footer}>
              {status === 'loading' ? (
                <ActivityIndicator color={colors.primary} size='large' />
              ) : (
                <TouchableOpacity
                  style={styles.confirm}
                  onPress={handleConfirmCart}
                >
                  <Text style={styles.text}>Confirmar</Text>

                  <View style={styles.total}>
                    <Text style={styles.text}>Total</Text>

                    <Text style={styles.text}>$ {total}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </>
        ) : (
          <CartEmpty />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.white,
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: colors.primary,
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: colors.primary,
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
    fontFamily: 'Roboto',
    padding: 8,
    color: colors.white,
  },
});

export default Cart;
