import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOGIN, USER_LOGIN_RESET } from '../../app/actions/auth';

import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { ROUTES, IMAGES } from '../../utils';

type RootState = {
  auth: {
    user: { id: number; username: string; email?: string } | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
  };
};

type AppDispatch = any;

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { isLoading } = useSelector((state: RootState) => state.auth || { isLoading: false, error: null });
  const { user, error } = useSelector((state: RootState) => state.auth || { data: null, error: null });

  const [alertShown, setAlertShown] = useState<boolean>(false);

  const navigation = useNavigation();

  // this runs on mount + every time `user`/`isLoading`/`error` change
  useEffect(() => {
    if (!isLoading && error) {
      Alert.alert('Login Failed', error);
    }

    // on successful login (user exists), NAVIGATE
    if (!isLoading && user) {
      navigation.replace(ROUTES.HOME); // or whatever your main route key is
    }
  }, [user, isLoading, error, navigation]);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    console.log('Login attempt:', { username, password: '***' });

    dispatch({
      type: USER_LOGIN,
      payload: { username, password }
    })
  };

  return (
    <ScrollView // whole page
      style={
        {
          flex: 1,
          backgroundColor: 'rgb(240 230 218)',
          // borderColor: 'red',
          // borderWidth: 5,
        }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between', //y
        padding: 30,
        paddingBottom: 40,

      }}
      showsVerticalScrollIndicator={false}
    >

      {/* logo */}
      <View
        style={
          {
            display: 'flex',
            alignItems: 'flex-end', //x
            // borderColor: 'red',
            // borderWidth: 2,
          }}>

        <Image
          source={IMAGES.LOGO}
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
          }}
        />
      </View>



      {/* main form */}
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          minHeight: 350,
          rowGap: 30,
          // borderColor: 'green',
          // borderWidth: 2,
        }}
      >

        {/* header */}
        <View style={{
          // borderColor: 'red',
          // borderWidth: 2,
        }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '800',
              color: 'rgb(117 7 12)',
              fontFamily: 'LibreBaskerville',
            }}
          >
            Hi, Welcome!
          </Text>
        </View>

        <View style={{
          // borderColor: 'red',
          // borderWidth: 2,
          rowGap: 10,
        }}>
          <CustomTextInput
            label="username"
            placeholder="Enter your username"
            onChangeText={setUsername}
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
          />

          <CustomTextInput
            label="password"
            placeholder="Enter your password"
            onChangeText={setPassword}
            secureTextEntry
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
          />

          <TouchableOpacity
            onPress={() =>
              Alert.alert('Forgot Password', 'Contact admin for reset')
            }
          >
            <Text
              style={{
                color: 'rgb(79 104 21)',
                fontSize: 14,
                fontWeight: 600,
                alignSelf: 'flex-end'
              }}
            >
              forgot password?
            </Text>
          </TouchableOpacity>

          <CustomButton
            label={isLoading ? 'LOGGING IN...' : 'LOG IN'}
            textStyle={{
              color: 'rgb( 240 230 218)', //oat
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
            }}
            containerStyle={{
              width: '100%',
              height: 50,
              justifyContent: 'center',
              borderRadius: 5,
              backgroundColor: 'rgba(79, 104, 21, 0.8)', //accent
              marginTop: 20,
            }}
            loading={isLoading}
            onPress={handleLogin}
          />
        </View>
      </View>

      <View style={{
        // borderWidth: 2,
        // borderColor: 'blue',
        rowGap: 20,
      }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(101, 76, 46, 0.1)' }} />
          <Text style={{ marginHorizontal: 2, color: 'rgba(101, 76, 46, 0.4)', fontSize: 12, width: 'auto', paddingHorizontal: 10, textAlign: 'center', fontWeight: 600 }}>or</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(101, 76, 46, 0.1)' }} />
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 5,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'rgba(101, 76, 46, 0.4)',
              paddingHorizontal: 25,
              paddingVertical: 10,
              gap: 10,
            }}

            onPress={() =>
              Alert.alert('Google Login', 'work in progress')
            }
          >
            <FontAwesome
              name="google"
              size={20}
              color='rgb(101, 76, 46)'
            />

            <Text style={{
              marginHorizontal: 2,
              color: 'rgb(101, 76, 46)',
              fontSize: 14,
              fontWeight: 700,
              textAlign: 'center'
            }}> Continue with Google </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'center',
            columnGap: 5,
            marginTop: 30,
            // borderWidth: 2,
            // borderColor: 'red',
          }}
        >
          <Text style={{
            color: '#8b7355',
            fontSize: 14
          }}>
            Don't have an account?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.REGISTER)}>
            <Text
              style={{
                color: 'rgb(101, 76, 46)',
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
  },
  textStyle: {
    fontSize: 14,
    color: 'rgb(117 7 12)',
    borderColor: 'rgba(117, 7, 13, 0.8)',
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
  }
});

export default Login;