import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';

//import components
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import { ROUTES } from '../../utils';
import { IMAGES } from '../../utils';

const Login = () => {
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: IMAGES.LOGO }}
        style={{ margin: 50, width: 100, height: 50 }}
      />

      <Text style={{ fontSize: 20 }}>Welcome!</Text>
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

      <CustomButton
        label={'Login'}
        containerStyle={{
          width: '80%',
        }}
        textStyle={{
          textAlign: 'center',
        }}
        onPress={() => {
          if (emailAdd != '123' || password != '123') {
            return Alert.alert('Incorrect credentials', 'Please try again');
          }

          navigation.navigate(ROUTES.HOME);
        }}
      />
    </View>
  );
};

export default Login;
