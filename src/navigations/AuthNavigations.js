import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//screens
import Login from '../screens/auth/Login'

//utils
import { ROUTES } from '../utils';
import { NavigationContainer } from "@react-navigation/native";

const AuthNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        </Stack.Navigator>
    );
};

export default AuthNav;