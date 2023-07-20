import { View, Text, ScrollView, SafeAreaView } from "react-native";

import { useState } from "react";

import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
  const router = useRouter();
  console.log(typeof images.profile);
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
