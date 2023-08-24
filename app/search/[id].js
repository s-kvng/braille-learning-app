import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";

import { ScreenHeaderBtn, NearbyJobCard } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "../../styles/search";

import Letters from "../../components/home/letters/Letters";
import Numbers from "../../components/home/numbers/Numbers";
import About from "../../components/home/about/About";

const JobSearch = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [header, setHeader] = useState("");

  //   useEffect(() => {
  //     params.id === "Numbers" && setHeader("Number");
  //   }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: params.id,
        }}
      />

      {params.id === "Alphabet" && <Letters />}

      {params.id === "Numbers" && <Numbers />}

      {params.id == "About" && <About />}
    </SafeAreaView>
  );
};

export default JobSearch;
