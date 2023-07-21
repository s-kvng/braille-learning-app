import { View, Text, ScrollView, SafeAreaView } from "react-native";

import { useState } from "react";

import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";
import PopularWords from "../components/home/popular/PopularWords";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn inconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              inconUrl={"../assets/images/kemal.jpg"}
              dimension="60%"
            />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 10 }}>
          <Welcome />
        </View>

        <PopularWords />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
