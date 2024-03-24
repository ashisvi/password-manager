import { Stack } from "expo-router"
import { Provider } from "react-redux"

import store from "@/redux/store"
import { darkTheme } from "@/theme"
import LeftHeaderBtn from "@/components/LeftHeaderBtn"

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
        <Stack.Screen
          name="index"
          options={{
            title: "Password Manager",
            headerRight: () => <LeftHeaderBtn />,
            headerTitleStyle: {
              color: darkTheme.textColor,
              fontSize: 23,
              fontWeight: "700",
            },
          }}
        />
        <Stack.Screen name="addForm" options={{ title: "Add Password" }} />
        <Stack.Screen name="sitePage/[site]" options={{ title: "passwords" }} />
      </Stack>
    </Provider>
  )
}

export default RootLayout
