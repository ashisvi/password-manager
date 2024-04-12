import { useEffect, useState } from "react"
import { StyleSheet, Text, Pressable, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { updatePassword } from "@/redux/passwords/passwordSlice"
import { darkTheme } from "@/utils/theme"
import { useLocalSearchParams, useNavigation } from "expo-router"
import Input from "@/components/Input"
import { RootState } from "@/redux/store"

export default function addForm() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()

  const password = useSelector((state: RootState) =>
    state.passwords.passwords.find((item) => id === item.id),
  )

  const [form, setForm] = useState({
    site: password?.site,
    username: password?.username,
    password: password?.password,
  })
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    setDisabled(!form.username || !form.password)
  }, [form])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={[styles.btn, disabled ? styles.disabledBtn : null]}
          onPress={handleSubmit}
          disabled={disabled}
        >
          <Text style={disabled ? styles.disabledBtnText : styles.btnText}>
            Save
          </Text>
        </Pressable>
      ),
    })
  }, [navigation, form])

  const handleSubmit = () => {
    dispatch(updatePassword({ ...form, id: id as string }))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
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
        isPasswordInput={true}
      />
      <Text style={styles.warning}>
        Make sure that you're saving the correct password
      </Text>
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
    color: "#FF204E",
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
