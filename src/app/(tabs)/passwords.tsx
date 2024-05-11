import { View, Text, ScrollView } from "react-native";
import { PasswordsList, SearchInput } from "@/components";

const Passwords = () => {
  return (
    <View className="flex-1 bg-white/80">
      <View className="p-2 px-3">
        <SearchInput />
      </View>
      <PasswordsList />
    </View>
  );
};

export default Passwords;
