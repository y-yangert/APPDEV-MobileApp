import { View, Text } from 'react-native';
import React, { FC } from 'react';

const ErrorScreen: FC = () => {
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
      <Text>Error: User not found!</Text>
    </View>
  );
};

export default ErrorScreen;