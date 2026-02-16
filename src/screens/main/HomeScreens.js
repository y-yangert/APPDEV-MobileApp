import { View, Text } from 'react-native'
import React from 'react'

const HomeScreens = () => {
  return (

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
      }}>

      <Text>Welcome to the Home Screen!</Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 11,
          color: 'gray',
        }}>We updated the login screen and added custom text input.</Text>

    </View>
  )
}

export default HomeScreens;