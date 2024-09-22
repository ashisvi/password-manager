import { Stack } from "expo-router"

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#9046CF",
        },
      }}
    >
      <Stack.Screen name="sign-in" options={{ title: "Sign In" }} />
      <Stack.Screen name="sign-up" options={{ title: "Sign UP" }} />
    </Stack>
  )
}
export default AuthLayout
