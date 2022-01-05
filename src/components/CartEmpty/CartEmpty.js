import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const CartEmpty = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>TU CARRITO ESTA VACÍO ☹ </Text>

        <Image
          source={require('../../../assets/img/cartEmpty.png')}
          style={styles.cartEmpty}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartEmpty: {
    marginVertical: 5,
    width: 70,
    height: 70,
  },
});

export default CartEmpty;
