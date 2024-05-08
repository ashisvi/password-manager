import { icons } from "@/constants";
import { View, Text, TouchableOpacity, Image } from "react-native";

type Props = {
  id: string;
  website: string;
  url: string;
  username: string;
};

const PasswordCard = ({ id, website, url, username }: Props) => {
  return (
    <View className="w-full bg-white py-2 px-4 rounded-lg flex flex-row justify-between items-center mt-3">
      <View className="flex flex-row items-center gap-4">
        <View>
          <Image
            src={`http://www.google.com/s2/favicons?domain=${url}`}
            className="h-8 w-8"
            resizeMode="cover"
          />
        </View>
        <View>
          <Text className="text-lg font-semibold">{website}</Text>
          <Text className="text-[16px]">{username}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={icons.dots} resizeMode="contain" className="h-6 w-6" />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordCard;
