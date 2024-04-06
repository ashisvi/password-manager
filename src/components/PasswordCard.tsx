import { StyleSheet, Text, View } from "react-native"
import { darkTheme } from "@/utils/theme"
import Input from "./Input"

type PasswordCardProps = {
  username: string
  password: string
}

export default function PasswordCard({
  username,
  password,
}: PasswordCardProps) {
  return (
    <View style={styles.container}>
      <Input placeholder="Username" value={username} />
      <Input placeholder="Password" value={password} isPasswordType={true} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.backgroundColor,
    flex: 1,
    margin: 15,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#fff",
    padding: 10,
  },
  site: {},
  username: {},
  password: {},
})
