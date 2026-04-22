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
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.ERROR} component={ErrorScreen} />
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;