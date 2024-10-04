import { icons } from "@/constants";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  password: Password;
};

const PasswordCard = ({ password }: Props) => {
  console.log(password);
  return (
    <View className="w-full bg-white py-2 px-4 rounded-lg flex flex-row justify-between items-center mt-3 border border-primary">
      <Link href={`/passwords/${password._id}/password-page`}>
        <View className="flex flex-row items-center">
          <View>
            {password.websiteUrl && (
              <Image
                src={`http://www.google.com/s2/favicons?domain=${password?.websiteUrl}`}
                className="h-8 w-8"
                resizeMode="cover"
              />
            )}
          </View>
          <View className="ml-2">
            <Text className="text-lg font-semibold text-primary">
              {password?.websiteName}
            </Text>
            <Text className="text-[16px]">{password?.username}</Text>
          </View>
        </View>
      </Link>
      <TouchableOpacity>
        <Image source={icons.dots} resizeMode="contain" className="h-6 w-6" />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordCard;
