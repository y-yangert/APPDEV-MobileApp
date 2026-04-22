import React from 'react';
import { View } from 'react-native';

import HomeScreen from './src/navigations/screens/HomeScreens';
import ProfileScreen from './src/navigations/screens/ProfileScreens';

const App = () => {
  return (
    <View style = {{ flex: 1}}>
      <HomeScreen />
      <ProfileScreen />
    </View>
  );
};

export default App;
