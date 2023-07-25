import { View, Text, ScrollView, SafeAreaView } from "react-native";

import { useState } from "react";

import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";
import PopularWords from "../components/home/popular/PopularWords";
import Letters from "../components/home/letters/Letters";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 10 }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleCLick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <PopularWords />
          <Letters />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
