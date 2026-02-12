import React from 'react';
import { View } from 'react-native';

import HomeScreen from './src/screens/HomeScreens';
import ProfileScreen from './src/screens/ProfileScreens';

const App = () => {
  return (
    <View style = {{ flex: 1}}>
      <HomeScreen />
      <ProfileScreen />
    </View>
  );
};

export default App;
