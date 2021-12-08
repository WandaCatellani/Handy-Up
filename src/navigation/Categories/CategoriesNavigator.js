import Details from '../../screens/Details/Details';
import Home from '../../screens/Home/Home';
import React from 'react';
import Services from '../../screens/Services/Services';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CategoriesNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='home' component={Home} options={{ title: 'HOME' }} />

      <Stack.Screen
        name='services'
        component={Services}
        options={{ title: 'Services' }}
      />

      <Stack.Screen
        name='details'
        component={Details}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}
