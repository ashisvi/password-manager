import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { darkTheme } from '@/theme'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passwords</Text>
      <View>
        <Ionicons name='settings-sharp' size={28} color={darkTheme.textColor} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: darkTheme.textColor
  },
})