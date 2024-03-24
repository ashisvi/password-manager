import { StyleSheet, TouchableOpacity } from "react-native"

type Props = {
  onPress: () => void
  children: React.ReactNode
  style?: any
}

export default function Button({ onPress, children, style }: Props) {
  return <TouchableOpacity>{children}</TouchableOpacity>
}
const styles = StyleSheet.create({
  btn: {},
  btnText: {},
})
