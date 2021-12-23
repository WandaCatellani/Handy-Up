import React from 'react';
import Search from '../../screens/Search/Search';
import SearchBar from '../../components/SearchBar/SearchBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='search'
        component={SearchBar}
        options={{ title: 'SEARCH' }}
      />

      <Stack.Screen
        name='SearchResults'
        component={Search}
        options={{ title: 'SEARCH RESULTS' }}
      />
    </Stack.Navigator>
  );
}
