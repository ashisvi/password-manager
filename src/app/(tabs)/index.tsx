import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { SearchBar, Header } from "@/components";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <TouchableOpacity onPress={() => router.navigate("/AddForm")}>
        <Text>Add password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffffff",
  },
});
