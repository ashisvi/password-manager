import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native"
import { darkTheme } from "@/utils/theme"
import { FontAwesome6 } from "@expo/vector-icons"
import { useState } from "react"

type Props = {
  placeholder: string
  value: string
  isPasswordType?: true | false
  handleOnChange?: (e: any) => void
}

export default function Input({
  placeholder,
  value,
  handleOnChange,
  isPasswordType,
}: Props) {
  const [isPassword, setIsPassword] = useState<boolean>(false)

  const togglePassword = () => {
    setIsPassword((prevState) => !prevState)
  }

  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={darkTheme.borderColor}
        style={styles.input}
        value={value}
        onChange={handleOnChange}
        secureTextEntry={isPassword}
      />
      <View style={styles.btnBox}>
        {isPasswordType && (
          <TouchableOpacity onPress={togglePassword} style={styles.btn}>
            <FontAwesome6
              name={isPassword ? "eye" : "eye-slash"}
              size={24}
              color={darkTheme.borderColor}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.btn}>
          <FontAwesome6 name="copy" size={24} color={darkTheme.borderColor} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  inputBox: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31363F",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: darkTheme.borderColor,
    paddingHorizontal: 15,
    paddingVertical: 5,
    paddingRight: 5
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    height: 50,
    color: darkTheme.textColor,
  },
  btnBox: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    width: 30,
  },
})
