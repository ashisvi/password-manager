import { View, Text, TextInput } from "react-native";
import React from "react";

type Props = {};

const CustumInput = (props: Props) => {
  return (
    <View className="bg-grey/40 w-full p-3 rounded-lg relative">
      <Text className="absolute top-[50%] ml-3">CustumInput</Text>
      <TextInput />
    </View>
  );
};

export default CustumInput;
