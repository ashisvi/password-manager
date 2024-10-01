import React from "react";
import { TextInput, View } from "react-native";

interface InputProps {
  placeholder?: string;
  icon?: any;
  type?: string;
  password?: boolean;
  value?: any;
  setValue?: any;
}

const CustomInput: React.FC<InputProps> = ({
  placeholder,
  icon,
  type,
  password,
  value,
  setValue,
}) => {
  return (
    <View className="bg-grey/50 w-full p-3 rounded-lg relative">
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        className="text-lg"
        cursorColor="#18191F"
        secureTextEntry={password}
      />
    </View>
  );
};

export default CustomInput;
