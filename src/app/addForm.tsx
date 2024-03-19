import { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addPassword } from "@/redux/passwords/passwordSlice"
import { darkTheme } from "@/theme"
import { useNavigation } from "expo-router"

export default function addForm() {
  const dispatch = useDispatch()
  const navigation = useNavigation();

  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  })
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    setDisabled(!form.site || !form.username || !form.password)
  }, [form])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={[styles.btn, disabled ? styles.disabledBtn : null]} onPress={handleSubmit} disabled={disabled} >
          <Text style={disabled ? styles.disabledBtnText : styles.btnText}>Save</Text>
        </TouchableOpacity>
    )
    })
  }, [navigation, form])

  const handleSubmit = () => {
    dispatch(addPassword({ ...form, id: nanoid(), createdAt: Date.now() }))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.label}>Site</Text>
        <TextInput
          placeholder="Website"
          placeholderTextColor={darkTheme.borderColor}
          style={styles.input}
          value={form.site}
          onChange={(e) => {
            setForm({ ...form, site: e.nativeEvent.text })
          }}
        />
      </View>
      <Text style={styles.warning}>Make sure that you're saving the correct password</Text>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Username"
          placeholderTextColor={darkTheme.borderColor}
          style={styles.input}
          value={form.username}
          onChange={(e) => {
            setForm({ ...form, username: e.nativeEvent.text })
          }}
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={darkTheme.borderColor}
          style={styles.input}
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, password: e.nativeEvent.text })
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.backgroundColor,
    flex: 1,
    padding: 10
  },
  inputBox: {
    marginVertical: 20,
  },
  label: {
    fontSize: 15,
    margin: 10,
    color: darkTheme.textColor,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 15,
    height: 50,
    color: darkTheme.textColor,
    backgroundColor: "#31363F",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: darkTheme.borderColor
  },
  warning: {
    color: darkTheme.borderColor,
    marginTop: 15,
  },
  btn: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: darkTheme.textColor,
  },
  btnText: {
    color: darkTheme.textColor
  },
  disabledBtn: {
    borderColor: darkTheme.borderColor,
  },
  disabledBtnText: {
    color: darkTheme.borderColor
  }
})
