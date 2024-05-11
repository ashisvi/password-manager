import { router } from "expo-router";
import { View, Text, Button } from "react-native";

const Profile = () => {
  return (
    <View>
      <Button
        title="Add password"
        onPress={() => router.navigate("add-password")}
      />
      <Button title="Go back" onPress={() => router.navigate("/")} />
    </View>
  );
};

export default Profile;
