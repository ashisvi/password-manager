import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native"
import { darkTheme } from "@/utils/theme"
import { FontAwesome6 } from "@expo/vector-icons"
import { useState } from "react"

type Props = {
  placeholder: string
  value: string
  isPasswordInput?: true | false
  isCopyBtn?: true | false
  handleOnChange?: (e: any) => void
  editable?: boolean
  selectTextOnFocus?: boolean
}

export default function Input({
  placeholder,
  value,
  handleOnChange,
  isPasswordInput,
  isCopyBtn,
  selectTextOnFocus,
  editable,
}: Props) {
  const [isPassword, setIsPassword] = useState<boolean>(
    isPasswordInput || false,
  )

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
        selectTextOnFocus={selectTextOnFocus}
        editable={editable}
      />
      <View style={styles.btnBox}>
        {isPasswordInput && (
          <TouchableOpacity onPress={togglePassword} style={styles.btn}>
            <FontAwesome6
              name={isPassword ? "eye" : "eye-slash"}
              size={24}
              color={darkTheme.borderColor}
            />
          </TouchableOpacity>
        )}
        {isCopyBtn && (
          <TouchableOpacity style={styles.btn}>
            <FontAwesome6 name="copy" size={24} color={darkTheme.borderColor} />
          </TouchableOpacity>
        )}
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
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    paddingRight: 10,
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
