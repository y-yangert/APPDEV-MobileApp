import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//screens
import HomeScreen from '../screens/HomeScreens';
import ProfileScreen from '../screens/ProfileScreens';
import Login from '../screens/auth/Login'

//utils
import { ROUTES } from '../utils';
import { NavigationContainer } from "@react-navigation/native";

const MainNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
            <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default MainNav;