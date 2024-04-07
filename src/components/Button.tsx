import { darkTheme } from "@/utils/theme"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

type Props = {
  onPressHandler?: () => void
  children: string | JSX.Element
  style?: any
}

export default function Button({ onPressHandler, children, style }: Props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPressHandler}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: darkTheme.buttonColor,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 15,
  },
  btnText: {
    color: darkTheme.textColor,
    fontSize: 15,
    fontWeight: "700",
  },
})
