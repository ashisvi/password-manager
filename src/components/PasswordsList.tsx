import { View, Text, FlatList } from "react-native";
import React from "react";
import usePasswords from "@/hooks/usePasswords";
import PasswordCard from "./PasswordCard";

const PasswordsList = () => {
  const { passwords, loading, error } = usePasswords();

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={passwords?.passwords}
      renderItem={(password) => <PasswordCard password={password.item} />}
    />
  );
};

export default PasswordsList;
