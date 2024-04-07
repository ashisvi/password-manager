import { StyleSheet, Text, View } from "react-native"
import { darkTheme } from "@/utils/theme"
import Input from "./Input"
import Button from "./Button"

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
      <View>
        <Input placeholder="Username" value={username} isCopyBtn />
        <Input
          placeholder="Password"
          value={password}
          isPasswordInput
          isCopyBtn
        />
      </View>
      <View style={styles.btnBox}>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </View>
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
    padding: 15,
    borderColor: darkTheme.borderColor,
    borderWidth: 1,
  },
  site: {},
  username: {},
  password: {},
  btnBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
})
