import { useLocalSearchParams, useNavigation } from "expo-router"
import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import PasswordCard from "@/components/PasswordCard"
import { darkTheme } from "@/theme"

export default function SitePage() {
  const { site } = useLocalSearchParams()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: site,
    })
  }, [navigation, site])

  return (
    <View style={styles.container}>
      <PasswordCard />
      <Text style={{ color: "#fff" }}>{site}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.backgroundColor,
  },
})
