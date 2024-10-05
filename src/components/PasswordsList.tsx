import usePasswords from "@/hooks/usePasswords";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import PasswordCard from "./PasswordCard";
import SearchInput from "./SearchInput";

const PasswordsList = () => {
  const { passwords, loading, error } = usePasswords();
  const [search, setSearch] = useState("");

  const [filteredPasswords, setFilteredPasswords] = useState<Password[]>();

  useEffect(() => {
    setFilteredPasswords(
      passwords.filter(
        (password) =>
          password.username?.includes(search) ||
          password.websiteName?.includes(search) ||
          password.websiteUrl?.includes(search)
      )
    );
  }, [search, passwords, error, loading]);

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View>
      <View className="p-3">
        <SearchInput value={search} setValue={setSearch} />
      </View>
      <FlatList
        data={filteredPasswords}
        renderItem={(password) => <PasswordCard password={password.item} />}
        className="px-3"
      />
    </View>
  );
};

export default PasswordsList;
