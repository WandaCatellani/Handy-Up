import React from 'react';
import Search from '../../screens/Search/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Search'
        component={Search}
        options={{ title: 'SEARCH' }}
      />

      {/* <Stack.Screen
        name='SearchResults'
        component={SearchResults}
        options={{ title: 'SEARCH RESULTS' }}
      /> */}
    </Stack.Navigator>
  );
}
