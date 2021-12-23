import Profile from '../../screens/Users/Users';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShow: false }}>
      <Stack.Screen name='profile' component={Profile} />
    </Stack.Navigator>
  );
}
