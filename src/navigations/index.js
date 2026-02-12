import { createStackNavigator } from "@react-navigation/stack";
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import MainNav from './MainNavigations'
import AuthNav from './AuthNavigations'

export default () => {
    return (
        <NavigationContainer>
            <AuthNav />
        </NavigationContainer>
    )
}