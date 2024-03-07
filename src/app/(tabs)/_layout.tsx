import { Tabs } from "expo-router";

import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Root = () => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: () => <FontAwesome name="home" size={24} />,
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="Security"
          options={{
            tabBarIcon: () => <FontAwesome name="lock" size={24} />,
            title: "Security",
          }}
        />
        <Tabs.Screen
          name="Settings"
          options={{
            tabBarIcon: () => <Ionicons name="settings" size={24} />,
            title: "Settings",
          }}
        />
      </Tabs>
    </>
  );
};

export default Root;
