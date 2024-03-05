import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search" />
      <View>
        <FontAwesome name="search" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#f9f6f9",
    // FIXME: Add shadow
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
  },
});
