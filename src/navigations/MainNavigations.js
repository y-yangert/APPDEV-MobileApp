import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//screens
import HomeScreens from '../screens/main/HomeScreens';
import ProfileScreens from '../screens/main/ProfileScreens';
import Login from '../screens/auth/Login'

//utils
import { ROUTES } from '../utils';
import { NavigationContainer } from "@react-navigation/native";

const MainNav = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTES.HOME}>
            <Stack.Screen name={ROUTES.HOME} component={HomeScreens} />
            <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreens} />
            <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        </Stack.Navigator>
    );
};

export default MainNav;