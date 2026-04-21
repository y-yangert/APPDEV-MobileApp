import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../app/actions';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { ROUTES, IMAGES } from '../../utils';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Responsive sizing based on Infinix 8652 (baseline ~390dp width)
const wp = percentage => (SCREEN_WIDTH * percentage) / 100; // width percentage
const hp = percentage => (SCREEN_HEIGHT * percentage) / 100; // height percentage
const isSmallDevice = SCREEN_WIDTH < 360;
const isTablet = SCREEN_WIDTH > 600;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { isLoading, isError, errorMessage } = useSelector(state => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
          value={val => setUsername(val)}
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />

        <CustomTextInput
          label="Email"
          placeholder="Enter your email"
          value={val => setEmail(val)}
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />

        <CustomTextInput
          label="Password"
          placeholder="Enter your password"
          value={val => setPassword(val)}
          secureTextEntry
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />

        <CustomTextInput
          label="Confirm Password"
          placeholder="Confirm your password"
          value={val => setConfirmPassword(val)}
          secureTextEntry
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />
      </View>

      {/* Button & Error */}
      <View style={styles.bottomSection}>
        <CustomButton
          label="Register"
          containerStyle={styles.registerButton}
          textStyle={styles.buttonText}
          loading={isLoading}
          onPress={handleRegister}
        />

        {isError && <Text style={styles.errorText}>{errorMessage}</Text>}

        <View style={styles.loginLink}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
            <Text style={styles.loginLinkText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f0',
    paddingTop: Platform.OS === 'android' ? 50 : 40,
    paddingHorizontal: wp(5),
  },
  header: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  logo: {
    width: wp(isSmallDevice ? 22 : 25),
    height: hp(6),
    marginBottom: hp(1),
  },
  title: {
    fontSize: wp(5),
    fontWeight: '600',
    color: '#654c2e',
    textAlign: 'center',
    lineHeight: wp(6),
  },
  formContainer: {
    flex: 0.45,
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
  inputContainer: {
    width: wp(isTablet ? 70 : 85),
    marginBottom: hp(1.5),
    alignSelf: 'center',
  },
  inputText: {
    fontSize: wp(4.2),
  },
  bottomSection: {
    flex: 0.3,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  registerButton: {
    width: wp(isTablet ? 65 : 80),
    height: hp(6.5),
    backgroundColor: '#654c2e',
    borderRadius: wp(3),
    justifyContent: 'center',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonText: {
    color: '#ffffff',
    fontSize: wp(4.5),
    fontWeight: '500',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: wp(3.8),
    textAlign: 'center',
    marginVertical: hp(1),
  },
  loginLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  },
  loginText: {
    fontSize: wp(4),
    color: '#654c2e',
  },
  loginLinkText: {
    fontSize: wp(4),
    color: '#654c2e',
    fontWeight: '600',
  },
});

export default Register;
