import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import colors from '../../constants/colors';

const CartEmpty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TU CARRITO ESTA VACÍO 🙁</Text>

      <Image
        source={require('../../../assets/img/cartEmpty.png')}
        style={styles.cartEmpty}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.black,
    fontFamily: 'Roboto-Medium',
    marginVertical: 40,
  },
  cartEmpty: {
    marginVertical: 5,
    width: 100,
    height: 100,
  },
});

export default CartEmpty;
