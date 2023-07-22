import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./popularwords.style";
import { SIZES, COLOR, COLORS } from "../../../constants";

import PopularWordCard from "../../common/cards/popular/PopularWordCard";
import { popularWords } from "../../../constants";

const PopularWords = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular words</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Someting went wrong</Text>
        ) : (
          <FlatList
            data={popularWords}
            renderItem={({ item }) => <PopularWordCard item={item} />}
            keyExtractor={(item) => item?.word_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
      <Text style={styles.headerword}>⠓⠑⠇⠇⠕. </Text>
    </View>
  );
};

export default PopularWords;
