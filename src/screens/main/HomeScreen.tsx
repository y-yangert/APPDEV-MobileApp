import { Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { resetLogin } from '../../app/actions';

type NavigationPropType = NavigationProp<any>;

const HomeScreen: FC = () => {
  const navigation = useNavigation<NavigationPropType>();
  const dispatch = useDispatch();

  const handleLogout = (): void => {
    dispatch(resetLogin());
    navigation.navigate('Login');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
      }}
    >
      <Text>Welcome!</Text>
      <TouchableOpacity onPress={handleLogout}>
        <View
          style={{
            paddingHorizontal: 30,
            paddingVertical: 15,
            backgroundColor: '#f3f3f3',
            borderRadius: 25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>
            Log out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
