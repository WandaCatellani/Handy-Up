import Cart from '../../screens/Cart/Cart';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CartNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='cart' component={Cart} options={{ title: 'CART' }} />
    </Stack.Navigator>
  );
}
