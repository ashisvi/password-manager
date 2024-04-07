import { StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router"
import { darkTheme } from "@/utils/theme"
import Input from "./Input"
import Button from "./Button"

export default function PasswordCard({ username, password, id }: Password) {
  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Username"
          value={username}
          isCopyBtn
          editable={false}
          selectTextOnFocus={false}
        />
        <Input
          placeholder="Password"
          value={password}
          isPasswordInput
          isCopyBtn
          editable={false}
          selectTextOnFocus={false}
        />
      </View>
      <View style={styles.btnBox}>
        <Button>
          <Link
            href={{
              pathname: "/edit/[id]",
              params: { id: id },
            }}
          >
            Edit
          </Link>
        </Button>
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
