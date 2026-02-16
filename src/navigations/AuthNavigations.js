import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//screens
import Login from '../screens/auth/Login'
import HomeScreens from "../screens/main/HomeScreens";

//utils
import { ROUTES } from '../utils';
import { NavigationContainer } from "@react-navigation/native";

const AuthNav = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
            <Stack.Screen name={ROUTES.LOGIN} component={Login} />
            <Stack.Screen name={ROUTES.HOME} component={HomeScreens} />
        </Stack.Navigator>
    );
};

export default AuthNav;