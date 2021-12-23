import { Platform, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MapScreen from '../screens/Location/Location';
import PlaceListScreen from '../screens/PlaceListScreen';
import React from 'react';
import colors from '../constants/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PlaceStack = createNativeStackNavigator();

const PlaceNavigator = () => (
  <PlaceStack.Navigator
    initialRoute='Place'
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.DARK_SIENNA : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : colors.DARK_SIENNA,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <PlaceStack.Screen
      name='Direcciones'
      component={PlaceListScreen}
      options={{ title: 'Direcciones' }}
      options={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
            <Ionicons
              name='md-add'
              color={Platform.OS === 'android' ? 'white' : colors.DARK_SIENNA}
              size={24}
            />
          </TouchableOpacity>
        ),
      })}
    />

    <PlaceStack.Screen
      name='Map'
      component={MapScreen}
      options={{ title: 'Mapa' }}
    />
  </PlaceStack.Navigator>
);

export default PlaceNavigator;
