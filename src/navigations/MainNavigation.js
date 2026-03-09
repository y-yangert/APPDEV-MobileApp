import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import HomeScreen from '../screens/main/HomeScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import Login from '../screens/auth/Login';

//utils
import { ROUTES } from '../utils';
import { NavigationContainer } from '@react-navigation/native';

const MainNav = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default MainNav;
