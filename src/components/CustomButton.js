import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';

const CustomButton = ({ containerStyle, textStyle, label, onPress }) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={{ margin: 10 }} onPress={onPress}>
        <View
          style={{
            padding: 10,
            backgroundColor: 'black',
            borderRadius: 10,
          }}
        >
          <Text
            style={[
              textStyle,
              {
                color: 'white',
                fontSize: 20,
              },
            ]}
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;