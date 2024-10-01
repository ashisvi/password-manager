import { router } from "expo-router";
import { Button, View } from "react-native";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { onLogout } = useAuth();

  return (
    <View>
      <Button title="Log Out" onPress={onLogout} />
      <Button title="Go back" onPress={() => router.navigate("/")} />
    </View>
  );
};

export default Profile;
