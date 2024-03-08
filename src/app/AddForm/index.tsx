import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { UseDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function AddForm() {
  const data = useSelector((state: RootState) => state.passwords.passwords);
  // console.log(data);

  

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Website Name</Text>
        <TextInput placeholder="Amazon, Facebook" style={[styles.input]} />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="ashisvi" style={[styles.input]} />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Password</Text>
        <TextInput placeholder="********" style={[styles.input]} />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  inputBox: {},
  label: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 3,
    marginVertical: 5,
  },
  input: {
    borderColor: "#999",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
