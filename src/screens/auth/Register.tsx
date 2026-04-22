import React, { useState, FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../app/actions';
import type { RootState } from '../../app/reducers'; 
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { ROUTES, IMAGES } from '../../utils';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const wp = (percentage: number): number => (SCREEN_WIDTH * percentage) / 100;
const hp = (percentage: number): number => (SCREEN_HEIGHT * percentage) / 100;

const Register = () => { // ← FIXED: Removed unused FC type
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const authState = useSelector((state: RootState) => state.auth || {});
  const { isLoading = false, isError = false, errorMessage = '' } = authState;

  const navigation = useNavigation<any>(); // ← FIXED: Typed navigation
  const dispatch = useDispatch();

  const handleRegister = (): void => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    dispatch(
      userRegister({
        username,
        email,
        password,
      })
    );
  };
  
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: IMAGES.LOGO }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Join Pahina!</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <CustomTextInput
          label="Username"
          placeholder="Enter your username"
          onChangeText={setUsername}
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />

        <CustomTextInput
          label="Email"
          placeholder="Enter your email"
          onChangeText={setEmail}
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />

        <CustomTextInput
          label="Password"
          placeholder="Enter your password"
          onChangeText={setPassword}
          secureTextEntry
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />

        <CustomTextInput
          label="Confirm Password"
          placeholder="Confirm your password"
          onChangeText={setConfirmPassword}
          secureTextEntry
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />
      </View>

      {/* Button & Error */}
      <View style={styles.bottomSection}>
        <CustomButton
          label="Register"
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          onPress={handleRegister}
          loading={isLoading}
        />
        {isError && <Text style={styles.errorText}>{errorMessage}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(5),
  },
  header: {
    alignItems: 'center',
    marginVertical: hp(5),
  },
  logo: {
    width: wp(30),
    height: hp(15),
    marginBottom: hp(2),
  },
  title: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#000',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginVertical: hp(2),
  },
  inputText: {
    fontSize: wp(4),
    color: '#000',
  },
  bottomSection: {
    marginBottom: hp(3),
  },
  buttonContainer: {
    backgroundColor: '#007AFF',
    borderRadius: wp(3),
    paddingVertical: hp(2),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: hp(2),
    textAlign: 'center',
  },
});

export default Register;