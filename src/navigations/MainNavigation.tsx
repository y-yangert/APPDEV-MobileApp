import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';

// Screens
import HomeScreen from '../screens/main/HomeScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import ErrorScreen from '../screens/main/ErrorScreen';
import Login from '../screens/auth/Login';

// Utils
import { ROUTES } from '../utils';

const Stack = createStackNavigator();

const MainNav: FC = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={ROUTES.ERROR} component={ErrorScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default MainNav;