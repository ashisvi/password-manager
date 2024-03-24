import { StyleSheet, Text, View, TextInput } from "react-native"
import { darkTheme } from "@/theme"

type Props = {
  placeholder: string
  value: string
  handleOnChange: (e: any) => void
}

export default function Input({ placeholder, value, handleOnChange }: Props) {
  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={darkTheme.borderColor}
        style={styles.input}
        value={value}
        onChange={handleOnChange}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  inputBox: {
    marginVertical: 20,
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
    borderBottomColor: darkTheme.borderColor,
  },
})
