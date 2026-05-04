import {
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import React, { FC } from 'react';

interface CustomTextInputProps {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  textStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  label,
  placeholder,
  onChangeText,
  textStyle,
  labelStyle,
  containerStyle,
  secureTextEntry,
}) => {
  return (
    <View style={[
        containerStyle = {
        // borderColor: 'blue',
        // borderWidth: 2,
        rowGap: 10,
        }
    ]}>
      {/* <Text 
        style = {[
          labelStyle={
            fontSize: 10,
            fontWeight: 700,
            color:  'rgb(117 7 11)',
          },
        ]}>{label}</Text> */}

      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor='rgba(117, 7, 13, 0.5)'
        style={[
          containerStyle={
            width: '100%',
          },
          textStyle,
        ]}
      />
    </View>
  );
};

export default CustomTextInput;