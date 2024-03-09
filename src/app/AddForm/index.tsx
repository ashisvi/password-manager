import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPassword } from "@/redux/passwords/passwordSlice";

export default function AddForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    website: "",
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(addPassword({ ...form, id: nanoid(), createdAt: Date.now() }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Website Name</Text>
        <TextInput
          value={form.website}
          onChangeText={(text) => setForm({ ...form, website: text })}
          placeholder="Amazon, Facebook"
          style={styles.input}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          value={form.username}
          onChangeText={(text) => setForm({ ...form, username: text })}
          placeholder="ashisvi"
          style={styles.input}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          placeholder="********"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.btn} >
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
    gap: 20,
    paddingTop: 20
  },
  inputBox: {
    marginVertical: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 3,
    marginVertical: 5
  },
  input: {
    borderColor: "#999",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 150,
    marginVertical: 20,
    borderRadius: 15,
    alignSelf: "center"
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff"
  }
});
