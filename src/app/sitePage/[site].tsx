import { useLocalSearchParams, useNavigation } from "expo-router"
import { useEffect } from "react"
import { FlatList, StyleSheet, View, Linking } from "react-native"
import * as WebBrowser from "expo-web-browser"
import PasswordCard from "@/components/PasswordCard"
import { darkTheme } from "@/utils/theme"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import HeaderBtn from "@/components/HeaderBtn"

export default function SitePage() {
  const { site } = useLocalSearchParams()
  const navigation = useNavigation()

  const handleLink = async () => {
    await WebBrowser.openBrowserAsync(`https://${site}`)
  }

  useEffect(() => {
    navigation.setOptions({
      title: site,
      headerRight: () => <HeaderBtn iconName="link" onPress={handleLink} />,
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
