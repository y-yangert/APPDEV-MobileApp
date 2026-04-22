import React, { useState } from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { userLogin } from '../../app/actions';

import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import { ROUTES, IMAGES } from '../../utils';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoading } = useSelector((state: RootState) => state.auth || { isLoading: false });
  const navigation = useNavigation();

  const handleLogin = () => {
    dispatch(userLogin({ username, password }));
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f8f4f0' }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        padding: 24,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section */}
      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Image
          source={{ uri: IMAGES.LOGO }}
          style={{
            width: 120,
            height: 60,
            marginBottom: 16,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 28,
            fontWeight: '700',
            color: '#2d1b0f',
            marginBottom: 8,
          }}
        >
          Pahina
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#654c2e',
            fontWeight: '500',
          }}
        >
          Welcome back!
        </Text>
      </View>

      {/* Login Card */}
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 32,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
          elevation: 10,
          minHeight: 400,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#2d1b0f',
            marginBottom: 8,
            textAlign: 'center',
          }}
        >
          Sign In
        </Text>

        <CustomTextInput
          label="Username"
          placeholder="Enter your username"
          onChangeText={setUsername}
          containerStyle={{
            width: '100%',
            marginBottom: 20,
          }}
          textStyle={{
            color: 'black',
            fontSize: 16,
            paddingVertical: 16,
            paddingHorizontal: 20,
          }}
        />

        <CustomTextInput
          label="Password"
          placeholder="Enter your password"
          onChangeText={setPassword}
          secureTextEntry
          containerStyle={{
            width: '100%',
          }}
          textStyle={{
            color: 'black',
            fontSize: 16,
            paddingVertical: 16,
            paddingHorizontal: 20,
          }}
        />

        <CustomButton
          label={isLoading ? 'Signing In...' : 'Sign In'}
          containerStyle={{
            marginTop: 12,
            width: '100%',
            backgroundColor: '#654c2e',
            borderRadius: 12,
            paddingVertical: 18,
            shadowColor: '#654c2e',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 5,
          }}
          textStyle={{
            color: '#ffffff',
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center',
          }}
          loading={isLoading}
          onPress={handleLogin}
        />

        {/* Forgot Password */}
        <TouchableOpacity
          style={{ alignItems: 'center', marginTop: 16 }}
          onPress={() =>
            Alert.alert('Forgot Password', 'Contact admin for reset')
          }
        >
          <Text
            style={{
              color: '#654c2e',
              fontSize: 14,
              fontWeight: '500',
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Register Section */}
      <View
        style={{
          alignItems: 'center',
          marginTop: 24,
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ color: '#8b7355', fontSize: 14 }}>
          Not registered yet?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
          style={{
            marginTop: 8,
            paddingVertical: 12,
            paddingHorizontal: 24,
          }}
        >
          <Text
            style={{
              color: '#654c2e',
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;