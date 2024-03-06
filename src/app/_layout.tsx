import { Stack } from "expo-router";
import { Provider } from "react-redux";

import store from "./redux/store";

export default function _layout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ statusBarColor: "#fff", statusBarStyle: "dark" }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
