import { NavigationContainer } from '@react-navigation/native';
import { useEffect, FC } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../app/reducers';

import AuthNav from './AuthNavigation';
import MainNav from './MainNavigation';

const RootNavigator: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { data } = useSelector((state: RootState) => state.auth);

  useEffect((): void => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#000000', true);
    }
    StatusBar.setBarStyle('dark-content', true);
  }, [isDarkMode]);

  const isLoggedIn = !!data;

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default RootNavigator;