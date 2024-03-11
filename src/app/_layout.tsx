import { Stack } from "expo-router"
import { darkTheme } from "@/theme"

function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false, statusBarColor: darkTheme.backgroundColor}} />
  )
}

export default RootLayout