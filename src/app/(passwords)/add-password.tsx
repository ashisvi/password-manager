import { CustomInput } from "@/components";
import { View } from "react-native";

export default function AddPassword() {
  return (
    <View className="flex-1 justify-evenly items-center bg-white">
      <View className="flex-1 w-full px-3 py-5 bg-white">
        <View className="mt-3">
          <CustomInput placeholder="Website Ex. Amazon" />
        </View>
        <View className="mt-3">
          <CustomInput placeholder="URL Ex. www.amazon.com" />
        </View>
        <View className="mt-3">
          <CustomInput placeholder="Username or Email" />
        </View>
        <View className="mt-3">
          <CustomInput placeholder="Password" password />
        </View>
      </View>
    </View>
  );
}
