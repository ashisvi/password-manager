import usePasswords from "@/hooks/usePasswords";
import React from "react";
import { FlatList, Text } from "react-native";
import PasswordCard from "./PasswordCard";

const PasswordsList = () => {
  const { passwords, loading, error } = usePasswords();

  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={passwords?.passwords}
      renderItem={(password) => <PasswordCard password={password.item} />}
      className="p-3"
    />
  );
};

export default PasswordsList;
