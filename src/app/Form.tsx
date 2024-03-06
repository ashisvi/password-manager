import { StyleSheet, Text, View } from "react-native";

import { UseDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";

export default function Form() {
  const data = useSelector((state: RootState) => state.passwords.passwords);
  console.log(data);

  return (
    <View>
      <Text>Form</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
