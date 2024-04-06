import { StyleSheet, Text, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { darkTheme } from "@/utils/theme"

type Props = {
  item: Password
}

export default function PasswordListItem({ item }: Props) {
  return (
    <Link href={`/sitePage/${item.site}`} style={styles.link}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="web"
          size={26}
          color={darkTheme.textColor}
        />
        <Text style={styles.site}>{item.site}</Text>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  icon: {},
  site: {
    flex: 1,
    color: darkTheme.textColor,
    fontSize: 20,
  },
  link: {
    flex: 1,
    borderWidth: 1,
    borderBottomColor: darkTheme.borderColor,
  },
})
