import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainNav from './MainNavigations';
import AuthNav from './AuthNavigations';
import { useEffect } from 'react';

export default () => {
  // see status bar
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  }, []);

  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
};
