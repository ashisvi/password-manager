import { View, Image, TextInput } from "react-native";
import { icons } from "../constants";

const SearchInput = () => {
  return (
    <View className="w-full bg-grey/50 rounded-2xl py-3 px-5 flex-row items-center">
      <TextInput
        placeholder="Search"
        className="text-lg flex-1"
        cursorColor="#18191F"
      />
      <Image source={icons.search} resizeMode="contain" className="h-8 w-8" />
    </View>
  );
};

export default SearchInput;
