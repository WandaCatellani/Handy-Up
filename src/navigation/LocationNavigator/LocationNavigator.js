import Location from '../../screens/Location/Location';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function LocationNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='location'
        component={Location}
        options={{ title: 'LOCATION' }}
      />
    </Stack.Navigator>
  );
}
