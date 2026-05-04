import React, { useState } from 'react';
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
import { userRegister } from '../../app/actions/auth';

import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { ROUTES, IMAGES } from '../../utils';

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const authState = useSelector((state: RootState) => state.auth || {});
  const { isLoading = false, isError = false, errorMessage = '' } = authState;

  const navigation = useNavigation<any>();

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    dispatch(userRegister({ username, email, password }));
  };

  return (
    <ScrollView
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
      showsVerticalScrollIndicator={false}>

      {/* header + logo */}
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
      <View style={{
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
              fontSize: 28,
              fontWeight: '800',
              color: 'rgb(117 7 12)',
            }}
          >
            Create Account
          </Text>
        </View>

        <View style={{
            // borderColor: 'red',
            // borderWidth: 2,
            rowGap: 10,
          }}>
          <CustomTextInput
            label="Choose a Username"
            placeholder="Choose a username"
            onChangeText={setUsername}
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
          />

          <CustomTextInput
            label="Email address"
            placeholder="Enter your email address"
            onChangeText={setEmail}
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
          />

          <CustomTextInput
            label="Choose a Password"
            placeholder="Choose a password"
            onChangeText={setPassword}
            secureTextEntry
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
          />

          <CustomTextInput
            label="Confirm Password"
            placeholder="Confirm password"
            onChangeText={setConfirmPassword}
            secureTextEntry
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
          />

          <CustomButton
            label="SIGN UP"
            textStyle={{
              color: 'rgb( 240 230 218)',
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
            }}
            containerStyle={{
              width: '100%',
              height: 50,
              justifyContent: 'center',
              borderRadius: 5,
              backgroundColor: 'rgba(79, 104, 21, 0.8)',
              marginTop: 20,
            }}
            loading={isLoading}
            onPress={handleRegister}
          />
          {isError &&
            <Text>{errorMessage}
            </Text>}
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
                  Already have an account?
      
                </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                  <Text
                    style={{
                      color: 'rgb(101, 76, 46)',
                      fontSize: 14,
                      fontWeight: '600',
                    }}
                  >
                    Login
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

export default Register;