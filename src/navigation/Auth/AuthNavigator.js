import Auth from '../../screens/Auth/Auth';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShow: false }}>
      <Stack.Screen name='auth' component={Auth} />
    </Stack.Navigator>
  );
}
