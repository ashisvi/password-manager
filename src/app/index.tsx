import { FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { darkTheme } from "@/theme"
import { RootState } from "@/redux/store"
import { loadPasswordToAsyncStorage } from "@/utils/storage"
import { loadPasswords } from "@/redux/passwords/passwordSlice"
import SearchInput from "@/components/SearchInput"
import PasswordListItem from "@/components/PasswordListItem"

export default function index() {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadInitialPasswords = async () => {
      try {
        const savedPasswords = await loadPasswordToAsyncStorage()
        dispatch(loadPasswords(savedPasswords))
      } catch (error) {
        console.error("Something went wrong while loading passwords", error)
      }
    }

    loadInitialPasswords()
  }, [])

  const passwords = useSelector((state: RootState) => state.passwords.passwords)

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <SearchInput />
        <View style={styles.list}>
          <FlatList
            data={passwords}
            renderItem={({ item }) => <PasswordListItem item={item} />}
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
    flex: 1,
  },
})
