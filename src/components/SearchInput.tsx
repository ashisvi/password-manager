import { StyleSheet, TouchableOpacity, TextInput, View } from "react-native"
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"
import { darkTheme } from "@/utils/theme"
import { Link } from "expo-router"

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Ionicons
          style={styles.icon}
          name="search"
          size={24}
          color={darkTheme.textColor}
        />
        <TextInput
          style={styles.input}
          placeholder="Search passwords"
          placeholderTextColor={darkTheme.borderColor}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Link href="/addForm">
            <FontAwesome5 name="plus" size={24} color={darkTheme.textColor} />
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: darkTheme.borderColor,
    borderBottomWidth: 1,
    overflow: "hidden",
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: darkTheme.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    padding: 5,
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  btnContainer: {
    borderLeftWidth: 1,
    borderColor: darkTheme.borderColor,
    height: 58,
    width: 58,
  },
})
