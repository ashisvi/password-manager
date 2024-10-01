import { CustomInput } from "@/components";
import { icons } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function AddPassword() {
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
