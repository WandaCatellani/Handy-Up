import Mapita from '../../screens/Location/Location';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Search from '../../screens/Search/Search';


const Stack = createNativeStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='mapita'
        component={Mapita}
        options={{ title: 'MAPITA' }}
      />

      {/* <Stack.Navigator>
      <Stack.Screen
        name='search'
        component={Search}
        options={{ title: 'SEARCH' }}
      /> */}

      {/* <Stack.Screen
        name='SearchResults'
        component={SearchResults}
        options={{ title: 'SEARCH RESULTS' }}
      /> */}
    </Stack.Navigator>
  );
}
