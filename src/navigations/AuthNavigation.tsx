import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';

// Screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import HomeScreen from '../screens/main/HomeScreen';
import ErrorScreen from '../screens/main/ErrorScreen';

// Utils
import { ROUTES } from '../utils';

const Stack = createStackNavigator();

interface AuthNavProps {}

const AuthNav: FC<AuthNavProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.ERROR} component={ErrorScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;