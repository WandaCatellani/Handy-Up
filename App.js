import MainNavigator from './src/navigation/index';
import { Provider } from 'react-redux';
import React from 'react';
import Spinner from './src/components/Spinner/Spinner';
import { StatusBar } from 'expo-status-bar';
import { init } from './src/db';
import store from './store';
import { useFonts } from 'expo-font';

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database failed to connect');
    console.error(err.message);
  });

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function App() {
  const [loaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!loaded) return <Spinner />;

  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar style='auto' />
    </Provider>
  );
}
