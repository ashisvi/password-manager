import { View, Text, ScrollView } from "react-native";
import { SearchInput } from "@/components";

const Passwords = () => {
  return (
    <View className="flex-1 bg-white/80">
      <View className="p-2 px-3">
        <SearchInput />
      </View>
      <ScrollView className="px-2">
        <Text className="pt-2 pb-1 text-[22px] font-bold">Socials</Text>
      </ScrollView>
    </View>
  );
};

export default Passwords;
