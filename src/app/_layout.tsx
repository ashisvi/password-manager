import { Stack } from "expo-router"
import { Provider } from "react-redux"

import store from "@/redux/store"
import { darkTheme } from "@/theme"

function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          statusBarColor: darkTheme.backgroundColor,
          headerTintColor: darkTheme.textColor,
          headerStyle: {
            backgroundColor: darkTheme.backgroundColor,
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="addForm" options={{ title: "Add Password", }} />
      </Stack>
    </Provider>
  )
}

export default RootLayout
