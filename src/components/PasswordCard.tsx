import { darkTheme } from '@/theme'
import { StyleSheet, Text, View } from 'react-native'

export default function PasswordCard() {
  return (
    <View style={styles.container}>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.backgroundColor,
    shadowColor: darkTheme.borderColor,
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 2,
    borderColor: "#fff"
  },
  site: {},
  username: {},
  password: {},
})