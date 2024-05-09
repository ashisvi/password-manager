import { View, Image, TextInput } from "react-native";
import { icons } from "../constants";

const SearchInput = () => {
  return (
    <View className="w-full bg-grey/40 rounded-xl py-2 px-3 flex-row items-center">
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
