import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { ROUTES } from '../../utils';
import { IMAGES } from '../../utils';

const Login = () => {
    const [emailAdd, setEmailAdd] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Image source={{ uri: IMAGES.LOGO, }} style={{ margin: 50, width: 200, height: 100 }} />

            <Text style={{ fontSize: 20, }}>Welcome!</Text>
            <CustomTextInput
                label={'Email Address'}
                placeholder={'Enter your e-mail'}
                value={val => setEmailAdd(val)}
                containerStyle={{
                    padding: 10,
                    width: '80%',
                    marginTop: 10,
                }}
                textStyle={{
                    fontSize: 20,
                }}
            />

            <CustomTextInput
                label={'Password'}
                placeholder={'Enter your password'}
                value={val => setPassword(val)}
                containerStyle={{
                    padding: 10,
                    width: '80%',
                }}
                textStyle={{
                    fontSize: 20,
                }}
            />

            <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => {
                    if (emailAdd != '123' || password != '123') {
                        return Alert.alert('Incorrect credentials', 'Please try again');

                    }

                    navigation.navigate(ROUTES.HOME);
                }}
            >
                <View
                    style={{
                        padding: 10,
                        backgroundColor: 'black',
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20
                        }}>LOGIN</Text>
                </View>
            </TouchableOpacity>

            <Text style={{ color: 'grey', marginTop: 50, }}>Test email: {emailAdd}</Text>
            <Text style={{ color: 'grey', marginTop: 10, }}>Test password: {password}</Text>
        </View>
    );
};

export default Login;