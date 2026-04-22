import { View, Text } from 'react-native';
import React, { FC } from 'react';

const ProfileScreen: FC = () => {
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
      <Text>ProfileScreens</Text>
    </View>
  );
};

export default ProfileScreen;
