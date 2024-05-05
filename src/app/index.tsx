import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-secondary">
      <Text className="text-white text-2xl font-bold">Hello world</Text>
      <Button title="home" onPress={() => router.replace("home")} />
    </View>
  );
}
