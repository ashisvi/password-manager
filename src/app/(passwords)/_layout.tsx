import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

const PasswordsLayout = () => {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="add-password"
        options={{
          title: "Add Password",
          headerLeft: () => (
            <Link href="/passwords">
              <Ionicons name="arrow-back" size={28} />
            </Link>
          ),
        }}
      />
    </Stack>
  );
};

export default PasswordsLayout;
