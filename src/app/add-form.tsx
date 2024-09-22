import { icons } from "@/constants";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CustomInput } from "@/components";

export default function AddForm() {
  return (
    <View className="flex-1 justify-evenly items-center bg-white">
      <View className="flex items-center gap-4">
        <View className="bg-grey/30 p-6 rounded-full">
          <Image source={icons.user} tintColor="orange" className="h-24 w-24" />
        </View>
        <TouchableOpacity>
          <Text className="font-semibold text-blue-900">Change Icon</Text>
        </TouchableOpacity>
      </View>
      <CustomInput />
    </View>
  );
}
