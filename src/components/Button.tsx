import { darkTheme } from "@/utils/theme"
import { StyleSheet, Text, Pressable } from "react-native"

type Props = {
  onPressHandler?: (...args: any) => void
  children: string | JSX.Element
  style?: any
}

export default function Button({ onPressHandler, children, style }: Props) {
  return (
    <Pressable style={styles.btn} onPress={onPressHandler}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
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
