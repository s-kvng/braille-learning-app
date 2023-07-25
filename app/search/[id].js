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

const JobSearch = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [header, setHeader] = useState("");

  console.log(params.id);

  //   useEffect(() => {
  //     params.id === "Numbers" && setHeader("Number");
  //   }, []);

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  //     try {
  //         const options = {
  //             method: "GET",
  //             url: `https://jsearch.p.rapidapi.com/search`,
  //             headers: {
  //                 "X-RapidAPI-Key": '',
  //                 "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //             },
  //             params: {
  //                 query: params.id,
  //                 page: page.toString(),
  //             },
  //         };

  //         const response = await axios.request(options);
  //         setSearchResult(response.data.data);
  //     } catch (error) {
  //         setSearchError(error);
  //         console.log(error);
  //     } finally {
  //         setSearchLoader(false);
  //     }
  // };

  // const handlePagination = (direction) => {
  //     if (direction === 'left' && page > 1) {
  //         setPage(page - 1)
  //         handleSearch()
  //     } else if (direction === 'right') {
  //         setPage(page + 1)
  //         handleSearch()
  //     }
  // }

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

      {params.id === "Alphabet" ? (
        <Letters />
      ) : (
        <View style={styles.NoContainer}>
          <Text>Nothing to show</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default JobSearch;
