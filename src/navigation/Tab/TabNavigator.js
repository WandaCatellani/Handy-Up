import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';

import CartNavigator from '../CartNavigator/CartNavigator';
import CategoriesNavigator from '../Categories/CategoriesNavigator';
import LocationNavigator from '../LocationNavigator/LocationNavigator';
import ProfileNavigator from '../Profile/ProfileNavigator';
import React from 'react';
import SearchNavigator from '../Search/SearchNavigator';
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator activeColor={colors.black} barStyle={style.navigator}>
      <Tab.Screen
        name='Home'
        component={CategoriesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='home' color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name='Places'
        component={LocationNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='map-marker' color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name='Search'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='search' color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name='Cart'
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='cart-outline'
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user' color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const style = StyleSheet.create({
  navigator: {
    backgroundColor: '#a8dadc',
  },
});
