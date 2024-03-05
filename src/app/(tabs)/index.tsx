import { Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import SearchBar from "@/components/SearchBar";

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 10,
    backgroundColor: "#ffffff"
  },
});
