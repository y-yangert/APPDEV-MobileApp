import {
  ActivityIndicator,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import React, { FC } from 'react';

interface CustomButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  label: string;
  textStyle?: StyleProp<TextStyle>;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  containerStyle,
  label,
  textStyle,
  onPress,
  loading = false,
}) => {
  const { width } = Dimensions.get('window');

  return (
    <>
      {loading ? (
        <View style={
          { 
            height: 80,
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center', 
          }
        }>
          
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <View style = {containerStyle}>
          <TouchableOpacity onPress={onPress}>
            <View>
              <Text style={textStyle}>{label}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default CustomButton;