import { View, Text } from "react-native";
import { SearchInput } from "@/components";

const Home = () => {
  return (
    <View>
      <View className="bg-primary/20 p-2">
        <SearchInput />
        <View>
          <Text className="text-lg text-tex">Manage</Text>
          <Text>Your Passwords</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

