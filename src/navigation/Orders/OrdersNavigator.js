import Orders from '../../screens/Orders/Orders';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CartNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='orders'
        component={Orders}
        options={{ title: 'ORDERS' }}
      />
    </Stack.Navigator>
  );
}
