import { icons } from "@/constants";
import { View, Text, TouchableOpacity, Image } from "react-native";

type Props = {
  password: Password;
};

const PasswordCard = ({ password }: Props) => {
  return (
    <View className="w-full bg-white py-2 px-4 rounded-lg flex flex-row justify-between items-center mt-3">
      <View className="flex flex-row items-center gap-4">
        <View>
          {password.url && (
            <Image
              src={`http://www.google.com/s2/favicons?domain=${password?.url}`}
              className="h-8 w-8"
              resizeMode="cover"
            />
          )}
        </View>
        <View>
          <Text className="text-lg font-semibold">{password?.website}</Text>
          <Text className="text-[16px]">{password?.username}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={icons.dots} resizeMode="contain" className="h-6 w-6" />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordCard;
