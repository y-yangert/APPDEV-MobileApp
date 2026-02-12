import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

const Login = () => {

    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'red',
                borderWidth: 2,
            }}
        >

            <Text Style={{ fontSize: 40 }}>Login Screen</Text>

            {/* button */}

            <TouchableOpacity>
                <View
                    style={{
                        backgroundColor: 'blue',
                        padding: 10,
                    }}>
                    <Text>
                        Login
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Login