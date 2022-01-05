import Home from '../../screens/Home/Home';
import Professionals from '../../screens/Professionals/Professionals';
import React from 'react';
import Services from '../../screens/Services/Services';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CategoriesNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='home'
        component={Home}
        screenOptions={{ headerShow: false }}
      />

      <Stack.Screen
        name='services'
        component={Services}
        options={{ title: 'Services' }}
      />

      <Stack.Screen
        name='professionals'
        component={Professionals}
        options={{ title: 'Professionals' }}
      />
    </Stack.Navigator>
  );
}
