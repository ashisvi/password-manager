import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const PasswordPage = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View>
      <Text>PasswordPage</Text>
    </View>
  );
};

export default PasswordPage;
