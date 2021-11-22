import Categories from '../screens/Categories/Categories';
import Details from '../screens/Details/Details';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Services from '../screens/Services/Services';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainNavegation = () => {
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Categories} />

      <Stack.Screen name='Services' component={Services} />

      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default MainNavegation;
