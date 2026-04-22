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
  placeholder: string;
  label: string;
  onChangeText: (text: string) => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  placeholder,
  label,
  onChangeText,
  textStyle,
  containerStyle,
  secureTextEntry,
}) => {
  return (
    <View style={containerStyle}>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[
          textStyle,
          {
            borderBottomWidth: 2,
            borderColor: 'black',
            width: '100%',
          },
        ]}
      />
    </View>
  );
};

export default CustomTextInput;