import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={{statusBarColor: "#fff", statusBarStyle: "dark"}}>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  );
}
