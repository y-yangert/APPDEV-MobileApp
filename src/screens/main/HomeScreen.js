import { View, Text } from 'react-native';
import React from 'react';

const HomeScreen = () => {
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
      <Text>Welcome to the Homescreen!</Text>
    </View>
  );
};

export default HomeScreen;
