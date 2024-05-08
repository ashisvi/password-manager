import { View, Text, ScrollView } from "react-native";
import { Card, FilterBtn, PasswordCard, SearchInput } from "@/components";
import { icons } from "@/constants";

const Home = () => {
  return (
    <View>
      <View className="bg-primary/20 p-2 rounded-b-2xl pb-5">
        <SearchInput />
        <View className="py-3 px-1">
          <Text className="text-lg text-textr/50 font-semibold">Manage</Text>
          <Text className="text-2xl font-bold mt-1">Your Passwords</Text>
        </View>
        <View className="flex flex-row justify-between py-3 px-1">
          <Card icon={icons.people} type="Socials" passwords={10} />
          <Card icon={icons.menu} type="Apps" passwords={8} />
          <Card icon={icons.wallet} type="Wallets" passwords={6} />
        </View>
      </View>
      <View className="py-4 px-3">
        <Text className="text-2xl font-bold">Passwords</Text>
        <View>
          <View className="flex flex-row my-2">
            <FilterBtn text="All" isActive={true} />
            <FilterBtn text="Favorites" isActive={false} />
            <FilterBtn text="Frequent" isActive={false} />
          </View>
          <ScrollView className="">
            <PasswordCard
              id="123"
              url="www.amazon.com"
              website="Amazon"
              username="ashisvi7519@gmail.com"
            />
            <PasswordCard
              id="123"
              url="www.instagram.com"
              website="Instagram"
              username="ashisvi7519@gmail.com"
            />
            <PasswordCard
              id="123"
              url="www.amazon.com"
              website="Amazon"
              username="ashisvi7519@gmail.com"
            />
            <PasswordCard
              id="123"
              url="www.instagram.com"
              website="Instagram"
              username="ashisvi7519@gmail.com"
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;
