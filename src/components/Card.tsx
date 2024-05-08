import { Image, Text, View } from "react-native";

type Props = {
  icon: any;
  type: string;
  passwords: number;
};

const Card = ({ icon, type, passwords }: Props) => {
  return (
    <View className="px-3 py-5 bg-white flex justify-center items-center max-w-[120px] rounded-xl">
      <View className="bg-primary/20 p-3 rounded-full">
        <Image
          source={icon}
          className="h-7 w-7"
          resizeMode="contain"
          tintColor="#9046CF"
        />
      </View>
      <Text className="font-bold text-lg">{type}</Text>
      <Text>{passwords} passwords</Text>
    </View>
  );
};

export default Card;
