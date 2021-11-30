import AppLoading from 'expo-app-loading';
import MainNavigation from './src/navigation/MainNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import store from './store';
import { useFonts } from 'expo-font';
const FONT_DEFAULT = 'Roboto';

export default function App() {
  const [loaded] = useFonts({
    [FONT_DEFAULT]: require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!loaded) return <AppLoading />;

  return (
    // <PaperProvider>
    //   <MainNavigation />
    // </PaperProvider>

    <Provider store={store}>
      <MainNavigation />
      <StatusBar style='auto' />
    </Provider>
  );
}
