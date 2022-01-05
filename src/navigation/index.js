import React, { useEffect, useState } from 'react';

import AuthNavigator from './Auth/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Tab/TabNavigator';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
  const user = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
