import { useLocalSearchParams, useNavigation } from "expo-router"
import { useEffect } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import PasswordCard from "@/components/PasswordCard"
import { darkTheme } from "@/utils/theme"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function SitePage() {
  const { site } = useLocalSearchParams()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: site,
    })
  }, [navigation, site])

  const passwords = useSelector(
    (state: RootState) => state.passwords.passwords,
  ).filter((item) => item.site === site)

  return (
    <View style={styles.container}>
      <FlatList
        data={passwords}
        renderItem={({ item }) => <PasswordCard {...item} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.backgroundColor,
  },
})
