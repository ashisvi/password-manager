import { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addPassword } from "@/redux/passwords/passwordSlice"
import { darkTheme } from "@/theme"
import { useNavigation } from "expo-router"
import Input from "@/components/Input"

export default function addForm() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

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
        <TouchableOpacity
          style={[styles.btn, disabled ? styles.disabledBtn : null]}
          onPress={handleSubmit}
          disabled={disabled}
        >
          <Text style={disabled ? styles.disabledBtnText : styles.btnText}>
            Save
          </Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation, form])

  const handleSubmit = () => {
    dispatch(addPassword({ ...form, id: nanoid(), createdAt: Date.now() }))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Site</Text>
        <Input
          placeholder="Website"
          value={form.site}
          handleOnChange={(e) => {
            setForm({ ...form, site: e.nativeEvent.text })
          }}
        />
      </View>
      <Text style={styles.warning}>
        Make sure that you're saving the correct password
      </Text>
      <Input
        placeholder="Username"
        value={form.username}
        handleOnChange={(e) => {
          setForm({ ...form, username: e.nativeEvent.text })
        }}
      />
      <Input
        placeholder="Password"
        value={form.password}
        handleOnChange={(e) => {
          setForm({ ...form, password: e.nativeEvent.text })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.backgroundColor,
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 15,
    marginHorizontal: 10,
    color: darkTheme.textColor,
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
    color: darkTheme.textColor,
  },
  disabledBtn: {
    borderColor: darkTheme.borderColor,
  },
  disabledBtnText: {
    color: darkTheme.borderColor,
  },
})
