import { darkTheme } from "@/utils/theme"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

type Props = {
  onPress?: () => void,
  children: string,
  style?: any
}

export default function Button({ onPress, children, style }: Props) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: "skyblue",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 15
  },
  btnText: {
    color: darkTheme.textColor,
    fontSize: 15,
    fontWeight: "700",
  },
})
