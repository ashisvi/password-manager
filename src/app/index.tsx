import { FlatList, StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"

import SearchInput from "@/components/SearchInput"
import { darkTheme } from "@/theme"
import { RootState } from "@/redux/store"

export default function index() {
  const passwords = useSelector((state: RootState) => state.passwords.passwords)
  console.log(passwords)

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <SearchInput />
        <View style={styles.list}>
          <FlatList
            data={passwords}
            renderItem={({ item }) => <Text>{item.site}</Text>}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.backgroundColor,
  },
  main: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: darkTheme.borderColor,
    borderRadius: 10,
  },
  list: {
    flex: 1
  }
})
