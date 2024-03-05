import { View, StyleSheet } from "react-native";

import { SearchBar, Header } from "@/components";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
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
