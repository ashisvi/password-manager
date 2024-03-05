import { Tabs } from "expo-router";

import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Root = () => {
  return (
    <>
      <Tabs screenOptions={{headerStatusBarHeight: 10}}>
        <Tabs.Screen name="(tabs)/index" options={{
          tabBarIcon: () => <FontAwesome name="home" size={24} />,
          title: "Home",
          headerShown: false
        }} />
        <Tabs.Screen name="(tabs)/Security" options={{
          tabBarIcon: () => <FontAwesome name="lock" size={24} />,
          title: "Security",
        }} />
        <Tabs.Screen name="(tabs)/Settings" options={{
          tabBarIcon: () => <Ionicons name="settings" size={24} />,
          title: "Settings",
        }} />
      </Tabs>
    </>
  );
};

export default Root;
