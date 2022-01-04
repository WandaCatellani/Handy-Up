import React, { useEffect, useState } from 'react';

import AuthNavigator from './Auth/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Spinner from '../components/Spinner/Spinner';
import TabNavigator from './Tab/TabNavigator';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
  const user = useSelector((state) => state.auth.userId);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.then((res) => {
  //       setLoading(false);
  //     });
  //   }, 500);
  // }, []);

  return (
    // <Spinner />

    <>
      <NavigationContainer>
        {user ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>

    // <>
    //     {loading ? <Spinner /> :  <NavigationContainer />}
    // </>
  );
};

export default MainNavigator;
