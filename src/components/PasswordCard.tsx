import { StyleSheet, Text, View } from "react-native"
import { darkTheme } from "@/theme"

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
      <Text style={{ color: darkTheme.textColor }}>Sample</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.backgroundColor,
    flex: 1,
    maxHeight: 100,
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
