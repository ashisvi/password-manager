import { StyleSheet, Text, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { darkTheme } from "@/theme"

type Props = {
  item: Password
}

export default function PasswordCard({ item }: Props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="web"
        size={26}
        color={darkTheme.textColor}
      />
      <Text style={styles.site}>{item.site}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    borderBottomColor: darkTheme.borderColor,
    padding: 10,
  },
  icon: {},
  site: {
    flex: 1,
    color: darkTheme.textColor,
    fontSize: 20,
  },
})
